<template>
    <div 
        @click="scrollToTop()"
        :class="['go-top', {'active': isTop}]"
    >
        <i class="ri-arrow-up-s-fill"></i>
        <i class="ri-arrow-up-s-fill"></i>
    </div> 
</template>

<script>
export default {
    name: 'BackToTop',
    data (){
        return {
            isTop: false
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isTop = true
            } else {
                that.isTop = false
            }
        })
    }
}
</script>

<style lang="scss">
.go-top {
	position: fixed;
	cursor: pointer;
	right: 3%;
	top: 87%;
	background-color: var(--main-color);
	z-index: 4;
	width: 40px;
	text-align: center;
	height: 42px;
	line-height: 42px;
	transform: scale(0);
	visibility: hidden;
	transition: .9s;
	border-radius: 5px;
	i {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		right: 0;
		margin: 0 auto;
		color: var(--white-color);
		transition: 0.5s;
		font-size: 20px;
		&:last-child {
			opacity: 0;
			visibility: hidden;
			top: 60%;
		}
	}
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background-color: var(--main-color);
		opacity: 0;
		visibility: hidden;
		transition: 0.5s;
		border-radius: 5px;
	}
	&:hover {
		color: var(--white-color);
		background-color: var(--main-color);
		&::before {
			opacity: 1;
			visibility: visible;
		}
		i {
			&:first-child {
				opacity: 0;
				top: 0;
				visibility: hidden;
			}
			&:last-child {
				opacity: 1;
				visibility: visible;
				top: 50%;
			}
		}
	}
	&:focus {
		color: var(--white-color);
		&::before {
			opacity: 1;
			visibility: visible;
		}
		i {
			&:first-child {
				opacity: 0;
				top: 0;
				visibility: hidden;
			}
			&:last-child {
				opacity: 1;
				visibility: visible;
				top: 50%;
			}
		}
	}
	&.active {
		transform: translateY(0);
		opacity: 1;
		visibility: visible;
		right: 3%;
		top: 84%;
		transform: scale(1);
	} 
}
</style>