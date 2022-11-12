import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer>
            <svg viewBox="0 0 120 29">å
                <defs>
                    <mask id="xxx">
                        <circle cx={7} cy={12} r={40} fill="#fff" />
                    </mask>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation={2} result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="
       1 0 0 0 0  
       0 1 0 0 0  
       0 0 1 0 0  
       0 0 0 13 -9" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                    <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
                </defs>
                <use id="wave3" className="wave" xlinkHref="#wave" x={0} y={-2} />
                <use id="wave2" className="wave" xlinkHref="#wave" x={0} y={0} />
                {/* <g className="topball">
        <circle className="ball" cx={110} cy={8} r={4} stroke="none" strokeWidth={0} fill="red" />
        <g className="arrow">
          <polyline className points="108,8 110,6 112,8" fill="none" />
          <polyline className points="110,6 110,10.5" fill="none" />
        </g>
      </g> */}
                <g className="gooeff">
                    <circle className="drop drop1" cx={20} cy={2} r="1.8" />
                    <circle className="drop drop2" cx={25} cy="2.5" r="1.5" />
                    <circle className="drop drop3" cx={16} cy="2.8" r="1.2" />
                    <use id="wave1" className="wave" xlinkHref="#wave" x={0} y={1} />
                    {/* g mask="url(#xxx)">
<path   id="wave1"  class="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
</g>
</g */}
                </g>
            </svg>
        </footer>
    )
}

export default Footer
