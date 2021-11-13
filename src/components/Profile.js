import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle";
import { useColorMode } from "theme-ui"
import React, {useState} from "react";
import { Link } from "theme-ui"
import "./Profile.css"
import profileImage from "./ProfileIcon.png"

const GitHubIcon = (props) => {
    return (
        <svg
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2.3em"
            width="2.3em"
            className={props.className}
        >
            <path d="M10.07 20.503a1 1 0 00-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 00-1.837-2.415 1.2 1.2 0 01-.167-.11 1 1 0 00-.93-.645h-.005a1 1 0 00-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 01.924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098.004.268a1 1 0 002 0l-.005-.318c-.005-.19-.012-.464-.012-1.182zM20.737 5.377c.032-.125.063-.264.09-.42a6.278 6.278 0 00-.408-3.293 1.002 1.002 0 00-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 00-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 00-.631.584 6.3 6.3 0 00-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 00-1.256 3.83 8.422 8.422 0 00.043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 00-.118.4 1 1 0 001.942.479 1.678 1.678 0 01.468-.878 1 1 0 00-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 01-.033-.738 4.258 4.258 0 01.92-2.713 3.022 3.022 0 01.195-.231 1 1 0 00.188-1.025 3.388 3.388 0 01-.155-.555 4.094 4.094 0 01.079-1.616 7.543 7.543 0 012.415 1.18 1.009 1.009 0 00.827.133 11.777 11.777 0 016.173.001 1.005 1.005 0 00.83-.138 7.572 7.572 0 012.406-1.19 4.04 4.04 0 01.087 1.578 3.205 3.205 0 01-.169.607 1 1 0 00.188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0120 9.203a7.039 7.039 0 01-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 00-.546 1.746 1.63 1.63 0 01.466.908 3.06 3.06 0 01.093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 102 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 00-.155-1.311 4.256 4.256 0 00-.116-.416 6.513 6.513 0 005.445-6.424A8.697 8.697 0 0022 9.203a6.13 6.13 0 00-1.263-3.826z" />
        </svg>
    )
}

const CodePenIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2.3em"
            width="2.3em"
            className={props.className}
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M16.5 13.202L13 15.535v3.596L19.197 15 16.5 13.202zM14.697 12L12 10.202 9.303 12 12 13.798 14.697 12zM20 10.869L18.303 12 20 13.131V10.87zM19.197 9L13 4.869v3.596l3.5 2.333L19.197 9zM7.5 10.798L11 8.465V4.869L4.803 9 7.5 10.798zM4.803 15L11 19.131v-3.596l-3.5-2.333L4.803 15zM4 13.131L5.697 12 4 10.869v2.262zM2 9a1 1 0 01.445-.832l9-6a1 1 0 011.11 0l9 6A1 1 0 0122 9v6a1 1 0 01-.445.832l-9 6a1 1 0 01-1.11 0l-9-6A1 1 0 012 15V9z" />
        </svg>
    )
}

const LinkedInIcon = (props) => {
    return (
        <svg
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2.3em"
            width="2.3em"
            className={props.className}
        >
            <path d="M17.5 8.999a5.419 5.419 0 00-2.565.645A1 1 0 0014 8.999h-4a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1v-5.5a1 1 0 112 0v5.5a1 1 0 001 1h4a1 1 0 001-1v-7.5a5.507 5.507 0 00-5.5-5.5zm3.5 12h-2v-4.5a3 3 0 10-6 0v4.5h-2v-10h2v.703a1 1 0 001.781.625A3.483 3.483 0 0121 14.5zm-14-12H3a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1v-12a1 1 0 00-1-1zm-1 12H4v-10h2zM5.015 1.542a3.233 3.233 0 10-.057 6.457h.028a3.233 3.233 0 10.029-6.457zm-.029 4.457h-.028a1.222 1.222 0 01-1.37-1.228c0-.747.56-1.229 1.427-1.229A1.234 1.234 0 016.41 4.771c0 .746-.56 1.228-1.425 1.228z" />
        </svg>
    )
}

const socialInfo = {
    "GitHub": {
        link: 'https://github.com/CodyWMitchell',
        description: "Check out some of my code.",
        icon: <GitHubIcon />
    },
    "CodePen":{
        link: 'https://codepen.io/CWMitchell',
        description: "Look at my code snippits, and even use them in your own projects.",
        icon: <CodePenIcon />
    },
    "LinkedIn": {
        link: 'https://www.linkedin.com/in/cody-mitchell-55a72716b/',
        description: "View my experience and reach out!",
        icon: <LinkedInIcon />
    }
};

const Profile = () => {
    const [currentSocial, setCurrentSocial] = useState(null);
    const [colorMode, setColorMode] = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <div className="container">
            <img
                className="headerImage"
                src={profileImage}
                alt="profile"
            />
            <div className="card">
                <h1>
                    Hello, I'm Cody!
                </h1>
                <hr />
                <p>
                    I have a passion for developing beautiful, streamlined front-ends with secure, performant back-ends using modern technologies.
                </p>
                <hr/>
                <div>
                    <div className="socialInfo">
                        <div className="socialIcons">
                        {Object.keys(socialInfo).map((social, index) => {
                            return (
                                <Link className="iconLink" key={index} href={socialInfo[social].link} onMouseOver={()=>{setCurrentSocial(social)}} onMouseLeave={()=>{setCurrentSocial(null)}}>
                                    {React.cloneElement(socialInfo[social].icon,{className: isDark ? 'dark' : ''})}
                                </Link>
                            )
                        })}
                        </div>
                        {
                            currentSocial ?
                            <>
                                <h2>{currentSocial}</h2>
                                <p>{socialInfo[currentSocial].description}</p>
                            </>
                            :
                            <>
                                <h2 className={isDark ? 'dark' : ''}>Links</h2>
                                <p>Check out the icons above for more information.</p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;