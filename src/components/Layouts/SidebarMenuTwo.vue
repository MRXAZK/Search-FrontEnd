<template>
    <nav class="side-menu-area">
        <nav class="sidebar-nav scroll-bar metismenu">
            <ul id="accordionExample" class="sidebar-menu metismenu">
                <li>
                    <div id="1">
                        <a 
                            href="#" 
                            class="has-arrow box-style d-flex align-items-center"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse1" 
                            aria-expanded="true" 
                            aria-controls="collapse1"
                        >
                            <div class="icon">
                                <img src="../../assets/images/icon/element.svg" alt="element">
                            </div>
                            <span class="menu-title">Dashboards</span>
                        </a>
                    </div>
                    <ul 
                        class="sidemenu-nav-second-level collapse show"
                        id="collapse1" 
                        aria-labelledby="1" 
                        data-bs-parent="#accordionExample"
                    >
                        <li>
                            <router-link to="/">
                                <span class="menu-title">Website Analytics</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/hr-management">
                                <span class="menu-title">HR Management</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/lms-academy">
                                <span class="menu-title">LMS Academy</span>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <router-link to="/calendar" class="box-style d-flex align-items-center">
                        <div class="icon">
                            <img src="../../assets/images/icon/calendar.svg" alt="calendar">
                        </div>
                        <span class="menu-title">Calendar</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/chat" class="box-style d-flex align-items-center">
                        <div class="icon">
                            <img src="../../assets/images/icon/messages.svg" alt="messages">
                        </div>
                        <span class="menu-title">Chat</span>
                    </router-link>
                </li>

                <li>
                    <div id="2">
                        <a 
                            href="#" 
                            class="has-arrow box-style d-flex align-items-center collapsed"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse2" 
                            aria-expanded="false" 
                            aria-controls="collapse2"
                        >
                            <div class="icon">
                                <img src="../../assets/images/icon/document-copy.svg" alt="document-copy">
                            </div>
                            <span class="menu-title">File Manager</span>
                        </a>
                    </div>

                    <ul 
                        class="sidemenu-nav-second-level collapse"
                        id="collapse2" 
                        aria-labelledby="2" 
                        data-bs-parent="#accordionExample"
                    >
                        <li>
                            <router-link to="/my-devices">
                                <span class="menu-title">My Devices</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/recent">
                                <span class="menu-title">Recent</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/important">
                                <span class="menu-title">Important</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/deleted-files">
                                <span class="menu-title">Deleted Files</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/documents">
                                <span class="menu-title">Documents</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/images">
                                <span class="menu-title">Images</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/videos">
                                <span class="menu-title">Videos</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/audio">
                                <span class="menu-title">Audio</span>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <router-link to="/contact-us" class="box-style d-flex align-items-center">
                        <div class="icon">
                            <img src="../../assets/images/icon/profile-2user.svg" alt="profile-2user">
                        </div>
                        <span class="menu-title">Contact</span>
                    </router-link>
                </li>

                <li>
                    <div id="3">
                        <a 
                            href="#" 
                            class="has-arrow box-style d-flex align-items-center collapsed"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse3" 
                            aria-expanded="false" 
                            aria-controls="collapse3"
                        >
                            <div class="icon">
                                <img src="../../assets/images/icon/email.svg" alt="email">
                            </div>
                            <span class="menu-title">Mail Box</span>
                        </a>
                    </div>

                    <ul 
                        class="sidemenu-nav-second-level collapse"
                        id="collapse3" 
                        aria-labelledby="3" 
                        data-bs-parent="#accordionExample"
                    >
                        <li>
                            <router-link to="/inbox">
                                <span class="menu-title">Inbox</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/starred">
                                <span class="menu-title">Starred</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/drafts">
                                <span class="menu-title">Drafts</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/important">
                                <span class="menu-title">Important</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/trash">
                                <span class="menu-title">Trash</span>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <div id="4">
                        <a 
                            href="#" 
                            class="has-arrow box-style d-flex align-items-center collapsed"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse4" 
                            aria-expanded="false" 
                            aria-controls="collapse4"
                        >
                            <div class="icon">
                                <img src="../../assets/images/icon/user-octagon.svg" alt="user-octagon">
                            </div>
                            <span class="menu-title">Authentication</span>
                        </a>
                    </div>

                    <ul 
                        class="sidemenu-nav-second-level collapse"
                        id="collapse4" 
                        aria-labelledby="4" 
                        data-bs-parent="#accordionExample"
                    >
                        <li>
                            <router-link to="/login">
                                <span class="menu-title">Login</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/register">
                                <span class="menu-title">Register</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/profile">
                                <span class="menu-title">Profile</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/edit-profile">
                                <span class="menu-title">Edit Profile</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/forget-password">
                                <span class="menu-title">Forget Password</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/screen-lock">
                                <span class="menu-title">Screen Lock</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/error">
                                <span class="menu-title">Error</span>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <div id="5">
                        <a 
                            href="#" 
                            class="has-arrow box-style d-flex align-items-center collapsed"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse5" 
                            aria-expanded="false" 
                            aria-controls="collapse5"
                        >
                            <div class="icon">
                                <img src="../../assets/images/icon/layer.svg" alt="layer">
                            </div>
                            <span class="menu-title">Pages</span>
                        </a>
                    </div>

                    <ul 
                        class="sidemenu-nav-second-level collapse"
                        id="collapse5" 
                        aria-labelledby="5" 
                        data-bs-parent="#accordionExample"
                    >
                        <li>
                            <router-link to="/gallery">
                                <span class="meni-title">Gallery</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/about-company">
                                <span class="meni-title">About Company</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/services">
                                <span class="meni-title">Services</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/gallery">
                                <span class="meni-title">Gallery</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/faq">
                                <span class="meni-title">FAQ,s</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/terms">
                                <span class="meni-title">Terms</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/invoice">
                                <span class="meni-title">Invoice</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/pricing-table">
                                <span class="meni-title">Pricing Table</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/empty">
                                <span class="meni-title">Empty</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/coming-soon">
                                <span class="meni-title">Coming Soon</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/blog">
                                <span class="meni-title">Blog</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/blog-details">
                                <span class="meni-title">Blog Details</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/map">
                                <span class="meni-title">Map</span>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <div id="6">
                        <a 
                            href="#" 
                            class="has-arrow box-style d-flex align-items-center collapsed"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse6" 
                            aria-expanded="false" 
                            aria-controls="collapse6"
                        >
                            <div class="icon">
                                <img src="../../assets/images/icon/diagram.svg" alt="diagram">
                            </div>
                            <span class="menu-title">Chart</span>
                        </a>
                    </div>

                    <ul 
                        class="sidemenu-nav-second-level collapse"
                        id="collapse6" 
                        aria-labelledby="6" 
                        data-bs-parent="#accordionExample"
                    >
                        <li>
                            <router-link to="/apexcharts">
                                <span class="menu-title">Apex Charts</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/chartsjs">
                                <span class="menu-title">Charts JS</span>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <div id="7">
                        <a 
                            href="#" 
                            class="has-arrow box-style d-flex align-items-center collapsed"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse7" 
                            aria-expanded="false" 
                            aria-controls="collapse7"
                        >
                            <div class="icon">
                                <img src="../../assets/images/icon/shapes.svg" alt="shapes">
                            </div>
                            <span class="menu-title">Elements</span>
                        </a>
                    </div>

                    <ul 
                        class="sidemenu-nav-second-level collapse"
                        id="collapse7" 
                        aria-labelledby="7" 
                        data-bs-parent="#accordionExample"
                    >
                        <li>
                            <router-link to="/alerts">
                                <span class="menu-title">Alerts</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/buttons">
                                <span class="menu-title">Buttons</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/colors">
                                <span class="menu-title">Colors</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/avatar-square">
                                <span class="menu-title">Avatar Square</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/avatar-rounded">
                                <span class="menu-title">Avatar Rounded</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/avatar-radius">
                                <span class="menu-title">Avatar Radius</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/drop-downs">
                                <span class="menu-title">Drop Downs</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/list">
                                <span class="menu-title">List</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/tags">
                                <span class="menu-title">Tags</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/pagination">
                                <span class="menu-title">Pagination</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/navigation">
                                <span class="menu-title">Navigation</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/typography">
                                <span class="menu-title">Typography</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/breadcrumbs">
                                <span class="menu-title">Breadcrumbs</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/badges">
                                <span class="menu-title">Badges</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/panels">
                                <span class="menu-title">Panels</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/thumbnails">
                                <span class="menu-title">Thumbnails</span>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <div id="8">
                        <a 
                            href="#" 
                            class="has-arrow box-style d-flex align-items-center collapsed"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse8" 
                            aria-expanded="false" 
                            aria-controls="collapse8"
                        >
                            <div class="icon">
                                <img src="../../assets/images/icon/advanced.svg" alt="advanced">
                            </div>
                            <span class="menu-title">Advanced Elements</span>
                        </a>
                    </div>
                    <ul 
                        class="sidemenu-nav-second-level collapse"
                        id="collapse8" 
                        aria-labelledby="8" 
                        data-bs-parent="#accordionExample"
                    >
                        <li>
                            <router-link to="/media-object">
                                <span class="menu-title">Media Object</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/accordion">
                                <span class="menu-title">Accordion</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/tabs">
                                <span class="menu-title">Tabs</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/modal">
                                <span class="menu-title">Modal</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/progress">
                                <span class="menu-title">Progress</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/carousel">
                                <span class="menu-title">Carousel</span>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <div id="9">
                        <a 
                            href="#" 
                            class="has-arrow box-style d-flex align-items-center collapsed"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse9" 
                            aria-expanded="false" 
                            aria-controls="collapse9"
                        >
                            <div class="icon">
                                <img src="../../assets/images/icon/fatrows.svg" alt="fatrows">
                            </div>
                            <span class="menu-title">Forms</span>
                        </a>
                    </div>

                    <ul 
                        class="sidemenu-nav-second-level collapse"
                        id="collapse9" 
                        aria-labelledby="9" 
                        data-bs-parent="#accordionExample"
                    >
                        <li>
                            <router-link to="/form-layouts">
                                <span class="menu-title">Form Layouts</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/input-group">
                                <span class="menu-title">Input Group</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/form-editor">
                                <span class="menu-title">Form Editor</span>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <router-link to="/map" class="box-style d-flex align-items-center">
                        <div class="icon">
                            <img src="../../assets/images/icon/map.svg" alt="map">
                        </div>
                        <span class="menu-title">Maps</span>
                    </router-link>
                </li>

                <li>
                    <div id="10">
                        <a 
                            href="#" 
                            class="has-arrow box-style collapsed"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse10" 
                            aria-expanded="false" 
                            aria-controls="collapse10"
                        >
                            <div class="icon">
                                <img src="../../assets/images/icon/tables.svg" alt="tables">
                            </div>
                            <span class="menu-title">Tables</span>
                        </a>
                    </div>

                    <ul 
                        class="sidemenu-nav-second-level collapse"
                        id="collapse10" 
                        aria-labelledby="10" 
                        data-bs-parent="#accordionExample"
                    >
                        <li>
                            <router-link to="/default-table">
                                <span class="menu-title">Default Table</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/data-table">
                                <span class="menu-title">Data Tables</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/dark-table">
                                <span class="menu-title">Dark Tables</span>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <div id="11">
                        <a 
                            href="#" 
                            class="has-arrow box-style d-flex align-items-center collapsed"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse11" 
                            aria-expanded="false" 
                            aria-controls="collapse11"
                        >
                            <div class="icon">
                                <img src="../../assets/images/icon/icon.svg" alt="icon">
                            </div>
                            <span class="menu-title">Icons</span>
                        </a>
                    </div>

                    <ul 
                        class="sidemenu-nav-second-level collapse"
                        id="collapse11" 
                        aria-labelledby="11" 
                        data-bs-parent="#accordionExample"
                    >
                        <li>
                            <router-link to="/box-icon">
                                <span class="menu-title">Box Icon</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/remix-icon">
                                <span class="menu-title">Remix Icon</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </nav>
</template>

<script>
export default {
    name: 'SidebarMenuTwo'
}
</script>

<style lang="scss">
/*
Sidebar Menu Style
=====================================================*/
.sidebar-menu {
	.first-menu {
		position: fixed;
		background-color: transparent;
		height: 100%;
		width: 110px;
		top: 148px;
		overflow: auto;
		transition: width .5s;
		padding-bottom: 180px;
		left: 12px;
		z-index: 2;
		.list-group-item {
			border-radius: 0;
			font-size: 15px;
			&.main-grid {
				padding: 0 30px;
				margin-bottom: 30px;
				&:last-child {
					margin-bottom: 0;
				}
			}
			.icon {
				color: var(--white-color);
				box-shadow: var(--box-shadow);
				background-color: var(--white-color);
				width: 50px;
				height: 50px;
				line-height: 50px;
				border-radius: 20px;
				display: block;
				text-align: center;
				position: relative;
				z-index: 1;
				&::before {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 50px;
					height: 50px;
					background-image: linear-gradient(to bottom, #1765fd, #4fcb8d);
					z-index: -1;
					border-radius: 20px;
					transition: var(--transition);
					opacity: 0;
				}
            }
			&:hover {
				.icon {
					img {
						filter: brightness(100);
					}
					&::before {
						opacity: 1;
					}
				}
			}
			&.active {
				.icon {
					img {
						filter: brightness(100);
					}
					&::before {
						opacity: 1;
					}
				}
				.list-group-item {
					&.active {
						a {
							color: var(--main-color);
						}
					}
				}
			}
		}
		&:hover {
			width: 110px;
		}
		li {
			&:hover .submenu {
				visibility: visible;
				opacity: 1;
			}
		}
	}
	.submenu {
		position: fixed;
		left: 125px;
		width: 195px;
		top: 120px;
		background-color: var(--white-color);
		box-shadow: var(--box-shadow);
		height: 100%;
		opacity: 0;
		visibility: hidden;
		transition: var(--transition);
		overflow: auto;
		padding-top: 30px;
		padding-bottom: 160px;
		border-radius: 0;
		.list-group-item {
			margin-top: 8px;
			padding: 3px 20px;
			a {
				color: var(--heading-color);
				&.active {
					color: var(--main-color);
				}
			}
		}
		li {
			&:hover {
				.sub-submenu {
					visibility: visible;
					opacity: 1;
				}
			}
		}
	}
	.list-group-item {
		background-color: transparent;
		border: none;
		border-radius: 0;
	}
	.sub-submenu {
		position: fixed;
		background-color: #f9f9f9;
		left: 320px;
		top: 160px;
		height: 100%;
		width: 195px;
		opacity: 0;
		visibility: hidden;
		transition: var(--transition);
		overflow: auto;
		.list-group-item {
			a {
				color: var(--heading-color);
				&.active {
					color: var(--main-color);
				}
			}
			&:hover {
				background-color: transparent;
			}
		}
	}
	.arrow {
		position: fixed;
		left: 295px;
		width: 0; 
		height: 0; 
		border-top: 27px solid transparent;
		border-bottom: 27px solid transparent; 
		border-right: 27px solid #f9f9f9;
		top: 160px !important;
		&:nth-child(3) {top: 160px;}
	}
}

/*
Sidebar Menu Style Two Area
=====================================================*/
.side-menu-area {
    position: fixed;
    left: 0;
    top: 150px;
    height: 100%;
    width: 300px;
    z-index: 2;
    transition: var(--transition);
	.sidebar-nav {
		background-color: #F8FAFF;
		padding: 0;
		border-radius: var(--border-radius);
		height: 83%;
		#sidebar-menu {
			padding-bottom: 185px;
		}
		.metismenu {
			list-style-type: none;
			padding: 0;
			margin: 0;
			.nav-item-title {
				color: #b2b5b9;
				font-size: 14px;
				font-weight: 600;
				margin-bottom: 5px;
			}
			a {
				display: block;
                padding: 13px 15px;
			}
			ul {
				padding: 0;
				padding-top: 10px;
				padding-bottom: 10px;
				a {
					padding: 5px 30px;
				}
			}
			li {
				display: block;
				margin-bottom: 5px;
				margin-left: 20px;
				.box-style {
					padding: 15px 10px;
					border-radius: 50px 0 0 50px;
					display: block;
					.icon {
						color: var(--white-color);
						box-shadow: var(--box-shadow);
						background-color: var(--white-color);
						width: 50px;
						height: 50px;
						line-height: 50px;
						border-radius: 20px;
						display: inline-block;
						text-align: center;
						position: relative;
						z-index: 1;
						margin-right: 20px;
						&::before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							width: 50px;
							height: 50px;
							background-image: linear-gradient(to bottom, #1765fd, #4fcb8d);
							z-index: -1;
							border-radius: 20px;
							transition: var(--transition);
							opacity: 0;
						}
					}
					&:hover {
						color: var(--heading-color);
						background-color: var(--white-color);
						&::before {
							opacity: 1;
						}
					}
				}
				&:hover {
					.box-style {
						color: var(--heading-color);
						background-color: var(--white-color);
						padding: 15px 10px;
						.icon {
							color: var(--white-color);
							img {
								filter: brightness(100);
							}
							&::before {
								opacity: 1;
							}
						}
					}
					&:hover {
						color: var(--heading-color);
					}
				}
				a {
                    &[aria-expanded=true] {
                        &.box-style {
                            color: var(--heading-color);
                            background-color: var(--white-color);
                            padding: 15px 10px;
                            font-weight: 600;
                            .icon {
                                color: var(--white-color);
                                img {
                                    filter: brightness(100);
                                }
                                &::before {
                                    opacity: 1;
                                }
                            }
                        }
                    }
                    &.active {
                        color: var(--main-color);
                        position: relative;
                        span {
                            color: var(--main-color);
                        }
                    }
                }
				.mm-collapse {
					li {	
						a {
							display: block;
							&:hover {
								color: var(--main-color);
							}
						}
					}
				}
				.has-arrow {
					font-size: 15px;
				}
				a {
					font-size: 14px;
					i {
						font-size: 20px;
						box-shadow: var(--box-shadow);
						background-color: var(--white-color);
						display: inline-block;
						width: 35px;
						height: 35px;
						line-height: 35px;
						text-align: center;
						position: relative;
						top: 4px;
						margin-right: 5px;
						border-radius: 5px;
						color: var(--heading-color);
					}
				}
			}
			.has-arrow {
				display: block;
                position: relative;
				&::after {
					transform: rotate(-135deg) translate(0, -50%);
					right: 20px;
                    position: absolute;
                    content: "";
                    width: 0.5em;
                    height: 0.5em;
                    border-width: 1px 0 0 1px;
                    border-style: solid;
                    border-color: initial;
                    transform-origin: top;
                    top: 50%;
                    transition: all .3s ease-out;
				}
				&[aria-expanded=true] {
					&::after {
						transform: rotate(46deg) translate(0, -50%) !important;
					}
				}
			}
		}
	}
	&.style-two {
		.sidebar-nav {
			border-radius: 0;
			.metismenu {
				li {
                    a {
                        &[aria-expanded=true] {
                            &.box-style {
                                position: relative;
                                &::before {
                                    content: "";
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                    width: 5px;
                                    height: 100%;
                                    background-image: linear-gradient(to bottom, #1765FD, #4FCB8D);
                                    border-radius: 8px;
                                }
                            }
                        }
                    }
				}
			}
		}
	}
}

/* Max width 1199px */
@media only screen and (max-width:1199px) { 

	/* Sidebar Menu */
    .sidebar-menu {
        z-index: 9999;
        left: -100%;
        .first-menu {
            background-color: var(--white-color);
            padding-top: 20px;
            padding-bottom: 20px;
            box-shadow: var(--box-shadow);
			opacity: 0;
			visibility: hidden;
			transition: var(--transition);
			top: 88px !important;
            border-radius: 10px !important;
			position: fixed;
			left: -100%;
			z-index: 999;
        }
		&.active-sidemenu-area {
			.first-menu {
				left: 12px;
				z-index: 999;
				transition: var(--transition);
				opacity: 1;
				visibility: visible;
			}
		}
		.submenu {
			top: 88px;
			padding-top: 0;
			border-radius: 10px;
			width: 183px;
		}
    }
    .side-menu-area {
		top: 88px;
        left: -100%;
		box-shadow: var(--box-shadow);
        .sidebar-nav {
            background-color: var(--white-color);
			.metismenu li .box-style {
				padding: 8px 10px;
			}
        }
        &.active-sidemenu-area {
            left: 0;
        }
    }
	

}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
	.side-menu-area {
		top: 110px;
	}
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
	.side-menu-area {
		top: 110px;
	}
}

/* Min width 768px to Max width 1199px */
@media only screen and (min-width: 768px) and (max-width: 1199px) {

	.header-content-wrapper {
		padding: 20px 20px !important;
	}
	.sidebar-menu {
		.first-menu {
            top: 105px !important;
            border-radius: 20px !important;
		}
	}
	.sidebar-menu {
		.submenu {
			top: 105px;
			padding-top: 0;
			border-radius: 20px;
		}
	}

}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
	.side-menu-area {
		width: 250px;
		top: 148px;
		.sidebar-nav {
			.metismenu {
				li {
					.has-arrow {
						font-size: 13px;
					}
					.box-style .icon {
						margin-right: 10px;
					}
				}
				.has-arrow {
					&::after {
						right: 20px;
					}
				}
			}
		}
	}
}
</style>