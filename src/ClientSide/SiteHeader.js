import React from 'react'

export default function SiteHeader() {
    return (
        <>
            <div className="s-header">
                <div className="header__top">
                    <div className="header__logo">
                        <a className="site-logo" href="index.html">
                            <img src="Assets/images/logo.svg" alt="Homepage" />
                        </a>
                    </div>
                    <div className="header__search">
                        <form role="search" method="get" className="header__search-form" action="#">
                            <label>
                                <span className="hide-content">Search for:</span>
                                <input type="search" className="header__search-field" placeholder="Type Keywords" defaultValue name="s" title="Search for:" autoComplete="off" />
                            </label>
                            <input type="submit" className="header__search-submit" defaultValue="Search" />
                        </form>
                        <a href="#0" title="Close Search" className="header__search-close">Close</a>
                    </div>
                    <a href="#0" className="header__search-trigger" />
                    <a href="#0" className="header__menu-toggle"><span>Menu</span></a>
                </div>
                <nav className="header__nav-wrap">
                    <ul className="header__nav">
                        <li className="current"><a href="index.html" title>Home</a></li>
                        <li className="has-children">
                            <a href="#0" title>Categories</a>
                            <ul className="sub-menu">
                                <li><a href="category.html">Lifestyle</a></li>
                                <li><a href="category.html">Health</a></li>
                                <li><a href="category.html">Family</a></li>
                                <li><a href="category.html">Management</a></li>
                                <li><a href="category.html">Travel</a></li>
                                <li><a href="category.html">Work</a></li>
                            </ul>
                        </li>
                        <li className="has-children">
                            <a href="#0" title>Blog Posts</a>
                            <ul className="sub-menu">
                                <li><a href="single-video.html">Video Post</a></li>
                                <li><a href="single-audio.html">Audio Post</a></li>
                                <li><a href="single-gallery.html">Gallery Post</a></li>
                                <li><a href="single-standard.html">Standard Post</a></li>
                            </ul>
                        </li>
                        <li><a href="styles.html" title>Styles</a></li>
                        <li><a href="page-about.html" title>About</a></li>
                        <li><a href="page-contact.html" title>Contact</a></li>
                    </ul>
                    <ul className="header__social">
                        <li className="ss-facebook">
                            <a href="https://facebook.com/">
                                <span className="screen-reader-text">Facebook</span>
                            </a>
                        </li>
                        <li className="ss-twitter">
                            <a href="#0">
                                <span className="screen-reader-text">Twitter</span>
                            </a>
                        </li>
                        <li className="ss-dribbble">
                            <a href="#0">
                                <span className="screen-reader-text">Dribbble</span>
                            </a>
                        </li>
                        <li className="ss-pinterest">
                            <a href="#0">
                                <span className="screen-reader-text">Behance</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}
