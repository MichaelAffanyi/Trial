import styled from "styled-components";

export const FooterComponent = styled.div`
    height: 396px;
    /* background-color: #002529; */
`
export const FooterTop = styled.div`
    position: relative;
    height: 50%;
    background-color: #F67E7E;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .top_content {
        display: flex;
        justify-content: space-between;
        width: 70%;
        max-width: 1024px;

        @media (max-width: 450px) {
            text-align: center;
            flex-direction: column;
            height: 136px;
        }
    }

    img {
            position: absolute;
            left: 0;
            bottom: 0;

            @media (max-width: 950px) {
                bottom: -20px;
            }
        }

    span {
        font-weight: 700;
        font-size: 48px;
        line-height: 48px;
        color: #012F34;

        @media (max-width: 950px) {
            font-size: 32px;
            line-height: 32px;
        }
    }

    button {
        background: transparent;
        width: 153px;
        height: 48px;
        color: #012F34;
        border: 2px solid #012F34;
        border-radius: 24px;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        cursor: pointer;
        transition: all ease-in;

        &:hover {
            background-color: #012F34;
            color: #fff;
        }

        @media (max-width: 450px) {
            margin: 0 auto;
        }
    }

    @media (max-width: 450px) {
        height: 302px;
    }
`
export const FooterBottom = styled.div`
    height: 50%;
    background-color: #002529;
    display: flex;
    align-items: center;
    justify-content: center;

    .bottom_content {
        width: 80%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .content {
            width: 100%;
            max-width: 730px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            @media (max-width: 950px) {
                height: 102px;
            }

            @media (max-width: 450px) {
                flex-direction: column;
                height: 70%;
            }
        }
        
        @media (max-width: 950px) {
            flex-direction: column;
            width: 90%;
            height: 159px;
        }

        @media (max-width: 450px) {
            height: 302px;
        }
    }
    
    .nav {
        color: #fff;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .nav_links {
            display: flex;
            gap: 40px;
            cursor: pointer;

            span:hover {
                color: #F67E7E;
            }

            @media (max-width: 950px) {
                gap: 24px;
            }
        }

        @media (max-width: 950px) {
            width: 107px;
        }

        @media (max-width: 450px) {
            justify-content: unset;
            gap: 24px;
        }
    }

    .address {
        width: 445px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 15px;
        line-height: 25px;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.6;

        @media (max-width: 950px) {
            width: unset;
            text-align: right;
        }

        @media (max-width: 450px) {
            text-align: center;
        }
    }

    .footer {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
            color: #FFFFFF;
            mix-blend-mode: normal;
            opacity: 0.6;
        }

        .svg {
            display: flex;
            justify-content: space-between;
            width: 104px;
            margin-left: auto;
            cursor: pointer;

            svg:hover path {
               fill: #F67E7E; 
            }
            
            @media (max-width: 950px) {
                margin-left: unset;
            }

        }

        @media (max-width: 950px) {
            width: 100%;
            height: 25px;
            flex-direction: row;
            align-items: center;
        }

        @media (max-width: 450px) {
            flex-direction: column;
            gap: 16px;
            font-size: 15px;
        }
    }

    @media (max-width: 950px) {
        height: 271px;
    }

    @media (max-width: 450px) {
        height: 432px;
    }

`