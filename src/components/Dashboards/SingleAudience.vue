<template>
    <div class="row justify-content-center">
        <div class="col-lg-3 col-sm-6" v-for="audience in audiences" :key="audience.id">
            <div class="single-audience d-flex justify-content-between align-items-center">
                <div :class="audience.class">
                    <h5>{{ audience.title }}</h5>
                    <h4>{{ audience.number }} <span>{{ audience.symbol }}{{ audience.percent }}%</span></h4>
                </div>
                <div class="icon">
                    <img :src="require(`../../assets/images/${audience.image}`)" alt="image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import singleAudience from "./singleAudience.json";

export default {
    name: 'SingleAudience',
    data() {
        return {
            audiences: singleAudience,
        }
    }
}
</script>

<style lang="scss">
.single-audience {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #CAD6F2;
    border-radius: 20px;
    padding: 20px;
    transition: var(--transition);
    margin-bottom: 24px;

    .audience-content {
        h5 {
            font-weight: 500;
            font-size: 14px;
            color: var(--body-color);
            margin-bottom: 10px;
            letter-spacing: -0.28px;
        }

        h4 {
            letter-spacing: -0.34px;
            font-size: 17px;
            margin-bottom: 0;
            letter-spacing: -0.34px;

            span {
                font-size: 12px;
                color: #28C76F;
                font-weight: 500;
                letter-spacing: 0;
            }
        }

        &.color-style-fe5957 {
            h4 {
                span {
                    color: #fe5957;
                }
            }
        }
    }

    .icon {
        background-image: linear-gradient(to bottom, #1765fd, #4fcb8d);
        width: 70px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        border-radius: 20px;
    }

    &:hover {
        background-color: var(--white-color);
        border-color: var(--white-color);
        box-shadow: var(--box-shadow);
    }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .single-audience {
        padding: 15px;
        border-radius: 10px;

        .icon {
            border-radius: 10px !important;
        }
    }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .single-audience.d-flex {
        display: block !important;
        text-align: center;
        padding: 15px;
        margin-bottom: 24px;

        .icon {
            margin: auto;
            margin-top: 10px;
        }
    }
}

/* Min width 1200px to Max width 1320px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
    .single-audience.d-flex {
        padding: 10px;
        display: block !important;
        text-align: center;
        padding: 15px;
        margin-bottom: 24px;

        .icon {
            margin: auto;
            margin-top: 10px;
            width: 40px;
            height: 40px;
            line-height: 40px;
            border-radius: 8px;
        }

        .audience-content {
            h5 {
                font-size: 12px;
            }

            h4 {
                font-size: 15px;
            }
        }
    }
}

/* Min width 1400px to Max width 1700px */
@media only screen and (min-width: 1400px) and (max-width: 1700px) {
    .single-audience {
        padding: 15px 10px;

        .icon {
            width: 40px;
            height: 40px;
            line-height: 40px;
            border-radius: 8px;
        }

        .audience-content {
            h5 {
                font-size: 12px;
            }

            h4 {
                font-size: 15px;
            }
        }
    }
}
</style>