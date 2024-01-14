import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="s-footer">
                <div className="row">
                    <div className="column large-full footer__content">
                        <div className="footer__copyright">
                            <span>© Copyright Typerite 2019</span>
                            <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
                        </div>
                    </div>
                </div>
                <div className="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top" />
                </div>
            </footer>

        </>
    )
}
