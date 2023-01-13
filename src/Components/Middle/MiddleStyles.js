import styled from "styled-components";

export const MiddleContainer = styled.div`
    position: relative;
    width: 100%;
    height: 684px;
    background: #012F34;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .container {
        width: 1110px;
        height: 404px;
        /* background: red; */
        display: flex;
        justify-content: space-between;

        .head {
            width: 445px;
            height: 202px;
            /* background-color: green; */
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .line {
                width: 50px;
                height: 4px;
                background: #F67E7E;
            }

            .title {
                font-weight: 700;
                font-size: 48px;
                line-height: 48px;
                color: #FFFFFF;

                @media (max-width: 950px) {
                    font-size: 32px;
                    line-height: 32px;
                }
            }

            @media (max-width: 950px) {
                height: 100px;
            }

            @media (max-width: 450px) {
                width: 240px;
                height: 196px;
            }
        }

        .sidebar {
            width: 540px;
            height: 346px;
            /* background-color: blue; */

            .content {
                width: 540px;
                height: 94px;
                /* background-color: yellow; */
                display: flex;
                justify-content: space-between;
                margin-top: 32px;

                .image {
                    width: 72px;
                    height: 72px;      

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }

                    @media (max-width: 450px) {
                        align-self: center;
                    }
                }

                .article {
                    width: 445px;
                    height: 100%;

                    span {
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 28px;
                        color: #F67E7E;
                    }

                    p {
                        font-weight: 500;
                        font-size: 15px;
                        line-height: 25px;
                        color: #FFFFFF;
                        mix-blend-mode: normal;
                        opacity: 0.8;
                    }

                    @media (max-width: 450px) {
                        width: 100%;
                        text-align: center;
                    }
                }

                @media (max-width: 450px) {
                    width: 327px;
                    height: 199px;
                    /* background-color: blue; */
                    flex-direction: column;
                    /* align-items: center; */
                }
            }

            @media (max-width: 950px) {
                width: 573px;
            }

            @media (max-width: 450px) {
                width: 327px;
                height: 693px;
            }
        }

        .bg-1 {
            position: absolute;
            bottom: 0;
            right: -100px;

            @media (max-width: 950px) {
                bottom: unset;
                top: 0;
            }
        }

        @media (max-width: 950px) {
            width: 573px;
            height: 510px;
            flex-direction: column;
            justify-content: unset;
            gap: 44px;
        }

        @media (max-width: 450px) {
            width: 327px;
            height: 87%;
        }
    }

    @media (max-width: 950px) {
        height: 710px;
    }

    @media (max-width: 450px) {
        height: 1073px;
    }
`