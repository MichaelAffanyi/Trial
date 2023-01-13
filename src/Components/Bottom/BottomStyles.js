import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 745px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .bg-1 {
        position: absolute;
        top: 0;
        left: 0;
    }

    .bg-2 {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .container {
        width: 1110px;
        height: 465px;

        .title {
            width: 932px;
            height: 96px;
            font-weight: 700;
            font-size: 48px;
            line-height: 48px;
            text-align: center;
            color: #FFFFFF;
            margin: 0 auto;

            .emphasis {
                color: #79C8C7;
            }

            @media (max-width: 950px) {
                width: 573px;
                font-size: 32px;
                line-height: 32px;
            }

            @media (max-width: 450px) {
                width: 327px;
                height: 128px;
            }
        }

        .article {
            height: 313px;
            display: flex;
            justify-content: space-between;
            margin-top: 56px;

            .content {
                position: relative;
                width: 350px;
                height: 100%;
                display: flex;
                flex-direction: column;
                /* background: green; */
                gap: 24px;

                .quote-image {
                    width: 67px;
                    height: 56px;
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    z-index: -1;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                .quote {
                    height: 100px;
                    margin-top: 36px;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 25px;
                    text-align: center;
                    color: #FFFFFF;
                }

                .author {
                    height: 48px;
                    display: flex;
                    flex-direction: column;
                    text-align: center;

                    .name {
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 28px;
                        color: #79C8C7;
                    }

                    .position {
                        font-weight: 500;
                        font-size: 13px;
                        line-height: 18px;
                        color: #FFFFFF;
                    }
                }

                .image {
                    width: 62px;
                    height: 62px;
                    border: 2px solid #C4FFFE;
                    border-radius: 50%;
                    margin: 0 auto;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        border-radius: inherit;
                    }
                }

                @media (max-width: 950px) {
                    width: 100%;
                    height: 253px;
                }
            }

            @media (max-width: 950px) {
                flex-direction: column;
                gap: 48px;
                /* justify-content: space-between; */
            }

            @media (max-width: 450px) {
                width: 327px;
                height: 930px;
            }
        }

        @media (max-width: 950px) {
            height: 999px;
            width: 573px;
            /* background: red; */
        }

        @media (max-width: 450px) {
            width: 327px;
            height: 1106px;
        }
    }

    @media (max-width: 950px) {
        height: 1199px;
    }

    @media (max-width: 450px) {
        height: 1410px;
    }
`