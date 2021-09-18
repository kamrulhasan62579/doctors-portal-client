import React from 'react';
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="total">
            
            <div class="text"><p>404</p></div>
            <div class="conta">
            {/* <!-- caveman left --> */}
            <div class="caveman">
                <div class="leg">
                <div class="foot"><div class="fingers"></div></div>      
                </div>
                <div class="leg">
                <div class="foot"><div class="fingers"></div></div>      
                </div>
                <div class="shape">
                <div class="circle"></div>
                <div class="circle"></div>
                </div>
                <div class="head">
                <div class="eye"><div class="nose"></div></div>
                <div class="mouth"></div>
                </div>
                <div class="arm-right"><div class="club"></div></div>    
            </div>
            {/* <!-- caveman right --> */}
            <div class="caveman">
                <div class="leg">
                <div class="foot"><div class="fingers"></div></div>      
                </div>
                <div class="leg">
                <div class="foot"><div class="fingers"></div></div>      
                </div>
                <div class="shape">
                <div class="circle"></div>
                <div class="circle"></div>
                </div>
                <div class="head">
                <div class="eye"><div class="nose"></div></div>
                <div class="mouth"></div>
                </div>
                <div class="arm-right"><div class="club"></div></div>    
            </div>
            </div>
            {/* <!-- //////////////// CREDIT //////////////// --> */}
            <a href="/">
            <div id="link">
                <i class="fas fa-home bg-primary"></i>
                <p>Go Back Home</p>
            </div>
            </a>
        </div>
    );
};

export default NotFound;