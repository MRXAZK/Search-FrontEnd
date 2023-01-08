<template>
    <div class="account-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="account-content">
                        <div class="account-header">
                            <router-link to="/">
                                <img src="../../assets/images/main-logo.svg" alt="main-logo">
                            </router-link>
                            <h3>Login</h3>
                        </div>

                        <form @submit.prevent="handleSubmit" class="account-wrap">
                            <div v-if="errorMessage" class="error-message">
                                {{ errorMessage }}
                            </div>
                            <div class="form-group mb-24 icon">
                                <input type="email" v-model="email" class="form-control" placeholder="Email">
                                <img src="../../assets/images/icon/sms.svg" alt="sms">
                            </div>
                            <div class="form-group mb-24 icon">
                                <input type="password" v-model="password" class="form-control" placeholder="Password">
                                <img src="../../assets/images/icon/key.svg" alt="key">
                            </div>
                            <div class="form-group mb-24">
                                <router-link to="/forget-password" class="forgot">Forgot Password?</router-link>
                            </div>
                            <div class="form-group mb-24">
                                <button type="submit" class="default-btn">Log In</button>
                            </div>
                            <div class="form-group mb-24 text-center">
                                <p class="account">Not A Member? <router-link to="/register">Create An
                                        Account</router-link></p>
                            </div>
                        </form>

                        <ul class="account-social-link">
                            <li>
                                <a href="https://www.google.com/" target="_blank">
                                    <i class='bx bxl-google'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i class='bx bxl-facebook'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/" target="_blank">
                                    <i class='bx bxl-twitter'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            errorMessage: ''
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await axios.post('api/auth/login', {
                    email: this.email,
                    password: this.password,
                });
                // Set the access_token and refresh_token cookies
                Cookies.set('access_token', response.data.access_token);
                Cookies.set('refresh_token', response.data.refresh_token);

                if (response.data.access_token) {
                    Cookies.set('logged_in', true);
                    this.$router.push('/');
                }
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.detail;
                }
            }
        }
    },
    mounted() {
        document.body.classList.add('body-bg-f8faff')
    },
}
</script>

<style lang="scss">
.account-area {
    background-image: url(../../assets/images/account-bg.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: auto;
    height: 100vh;
}

.error-message {
    background-color: rgba(255, 0, 0, 0.1);
    color: red;
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
}

.account-content {
    max-width: 510px;
    margin: auto;
    background-color: var(--white-color);
    border-radius: 30px;
    padding: 50px;
}

.account-header {
    text-align: center;

    img {
        margin-bottom: 30px;
    }

    h3 {
        margin-bottom: 30px;
        padding-top: 30px;
        border-top: 1px solid #EBF1FF;
        font-size: 20px;
    }
}

.account-wrap {
    .forgot {
        color: #1765FD;
        font-size: 14px;
    }

    .default-btn {
        color: var(--white-color);
        width: 100%;
        padding: 23px 20px;
    }

    .account {
        font-size: 14px;
        margin-bottom: 0;
        color: #292D32;

        a {
            color: #1765FD;
        }
    }

    .form-check {
        a {
            color: #1765FD;
        }
    }
}

.account-social-link {
    padding-left: 0;
    margin-bottom: 0;
    list-style-image: none;
    text-align: center;

    li {
        display: inline-block;
        margin-right: 15px;

        &:last-child {
            margin-right: 0;
        }

        a {
            width: 46px;
            height: 46px;
            line-height: 50px;
            text-align: center;
            display: inline-block;
            background-color: #EBF1FF;
            color: #1765FD;
            border-radius: 50%;
            font-size: 20px;

            &:hover {
                background-color: var(--main-color);
                color: var(--white-color);
            }
        }
    }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .account-area {
        height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .account-content {
        padding: 30px;
    }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .account-area {
        height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .account-content {
        padding: 30px;
    }
}

/* Min width 1320px to Max width 1550px */
@media only screen and (min-width: 1320px) and (max-width: 1550px) {
    .account-area {
        height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }

}
</style>