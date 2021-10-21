import React, { memo } from "react";

function Footer() {
    return (
        <footer class="page-footer font-small blue">

            <div class="footer-copyright text-center py-3">© 2021 Copyright:
                <a href=""> Artoon.com</a>
            </div>

        </footer>
    )
}

export default memo(Footer)
