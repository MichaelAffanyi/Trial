import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 448px;
    display: flex;
    justify-content: center;

    .bg_1 {
        position: absolute;
        left: -100px;

        @media (max-width: 950px) {
            display: none;
        }
    }
    .bg_2 {
        position: absolute;
        bottom: 0;
        right: 165px;

        @media (max-width: 950px) {
            left: 0;
            right: 0;
            margin: 0 auto;
        }
    }
`
export const Content = styled.div`
    width: 80%;
    max-width: 1110px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        width: 635px;
        height: 100%;
        /* background-color: red; */
        font-style: normal;
        font-weight: 700;
        font-size: 100px;
        line-height: 100px;
        color: #FFFFFF;

        .special {
            color: #F67E7E;
        }

        @media (max-width: 950px) {
            width: 100%;
            font-size: 64px;
            line-height: 56px;
            text-align: center;
        }

        @media (max-width: 450px) {
            font-size: 40px;
            line-height: 40px;
        }
    }

    .article {
        width: 445px;
        height: 100%;
        /* background-color: green; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .line {
            width: 50px;
            height: 4px;
            background-color: #79C8C7;

            @media (max-width: 950px) {
                display: none;
            }
        }

        .content {
            width: 100%;
            height: 112px;
            /* font-style: normal; */
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            color: #FFFFFF;

            @media (max-width: 950px) {
                font-size: 15px;
                line-height: 28px;
                text-align: center;
            }

            @media (max-width: 450px) {
                font-size: 15px;
                line-height: 28px;
            }
        }

        @media (max-width: 950px) {
            width: 487px;
        }

        @media (max-width: 450px) {
            width: 100%;
        }
    }

    @media (max-width: 950px) {
        height: 290px;
       flex-direction: column;
    }
`