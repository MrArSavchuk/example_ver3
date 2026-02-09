import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import logo from "@/shared/assets/images/logo.webp";
import { useTranslation } from "react-i18next";
import { Stack } from '@/shared/ui/Stack/';
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { TypographyV2 } from '@/shared/ui/Typography';

import styles from './AdminLoginForm.module.scss';
import { useAuth } from '../hooks/useAuth';
import { useLoginAdminMutation } from '../api/authApi';

export const AdminLoginForm = () => {
    const { t } = useTranslation();
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: '',
            password: ''
        },
    });
    const { login } = useAuth();
    const navigate = useNavigate();

    const [loginAdmin, { isLoading, error }] = useLoginAdminMutation();

    const onSubmit = async (data) => {
        try {
            const response = await loginAdmin(data).unwrap();

            if (response.token) {
                Cookies.set('authToken', response.token);
                login(response);
                navigate('/admin');
            }
        } catch (err) {
            console.error('Login error:', err);
        }
    };

    return (
        <Stack 
            justify="center" 
            align="center" 
            className={styles.authContainer}
        >
            <Stack 
                direction="column" 
                justify="center" 
                align="center" 
                gap={16}
                className={styles.formWrapper}
            >
                <form  
                    onSubmit={handleSubmit(onSubmit)} 
                    className={styles.mainContent}
                >
                    <Stack 
                        direction="column" 
                        justify="center" 
                        align="center" 
                        gap={16}
                    >
                        <img src={logo} alt={t("Logo")} className={styles.logo} />
                        
                    <Stack 
                        direction="row" 
                        justify="flex-end" 
                        fullWidth
                    >
                        <TypographyV2 
                            variant="h1" 
                            justify="flex-end"
                            className={styles.welcomeText}
                        >
                            {t("Welcome")}
                        </TypographyV2>
                    </Stack>
                        {error?.status === 'FETCH_ERROR' && (
                            <TypographyV2 
                                variant="body16" 
                                as="span"
                                className={styles.errorText}
                            >
                                {t("Server connection error")}
                            </TypographyV2>
                        )}

                        {error?.status !== 'FETCH_ERROR' && error && (
                            <TypographyV2 
                                variant="body16" 
                                as="span"
                                className={styles.errorText}
                            >
                                {t("Invalid username or password")}
                            </TypographyV2>
                        )}

                        <TypographyV2 
                            variant="body14" 
                        >
                            {t("Please log in to access your admin dashboard and manage the system effectively.")}
                        </TypographyV2>

                        <Stack direction="column" gap="8" className={styles.fieldContainer}>
                            <TypographyV2 
                                variant="body14" 
                                as="label" 
                                htmlFor="username"
                            >
                                {t("Login")}
                            </TypographyV2>
                            <Input
                                fullWidth
                                id="username"
                                type="text"
                                className={styles.input}
                                {...register("username", {
                                    required: t("Username is required"),
                                })}
                            />
                            {errors.username && (
                                <TypographyV2 
                                    variant="body12" 
                                    as="span"
                                    className={styles.errorText}
                                >
                                    {errors.username.message}
                                </TypographyV2>
                            )}
                        </Stack>

                        <Stack direction="column" gap="8" className={styles.fieldContainer}>
                            <TypographyV2 
                                variant="body14" 
                                as="label"
                                htmlFor="password"
                            >
                                {t("Password")}
                            </TypographyV2>
                            <Input
                                fullWidth
                                id="password"
                                type="password"
                                className={styles.input}
                                {...register("password", {
                                    required: t("Password is required"),
                                })}
                            />
                            {errors.password && (
                                <TypographyV2 
                                    variant="body12" 
                                    as="span"
                                    className={styles.errorText}
                                >
                                    {errors.password.message}
                                </TypographyV2>
                            )}
                        </Stack>
                        
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className={styles.submitButton}
                        >
                            {t("Sign in")}
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Stack>
    );
};