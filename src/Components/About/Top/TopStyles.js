import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    height: 276px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .bg-image {
        position: absolute;
        right: -100px;
        bottom: 0;

        @media (max-width: 950px) {
            bottom: -100px;
        }
    }

    .content {
        width: 1110px;
        height: 156px;
        display: flex;
        justify-content: space-between;

        .title {
            height: 100px;
            width: 350px;
            font-weight: 600;
            font-size: 64px;
            line-height: 100px;
            color: #FFFFFF;

            @media (max-width: 950px) {
                width: 100%;
            }

            @media (max-width: 450px) {
                height: 40px;
                font-size: 40px;
                line-height: 40px;
            }

        }

        .aside {
            width: 730px;
            height: 156px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            .line {
                width: 50px;
                height: 4px;
                background-color: #F67E7E;

                @media (max-width: 950px) {
                    display: none;
                }
            }

            .article {
                font-weight: 500;
                font-size: 18px;
                line-height: 28px;
                color: #FFFFFF;

                @media (max-width: 950px) {
                    width: 100%;
                }

                @media (max-width: 450px) {
                    font-size: 15px;
                    height: 196px;
                    width: 317px;
                }
            }
            
            @media (max-width: 950px) {
                width: 530px;
                height: 140px;
                margin: 0 auto;
            }

            @media (max-width: 450px) {
                width: 317px;
            }
        }

        @media (max-width: 950px) {
            width: 683px;
            height: 220px;
            flex-direction: column;
            text-align: center;
        }
        @media (max-width: 450px) {
            width: 327px;
            height: 252px;
            justify-content: unset;
            gap: 16px;
        }
    }

    @media (max-width: 950px) {
        height: 332px;
        align-items: unset;
    }
`