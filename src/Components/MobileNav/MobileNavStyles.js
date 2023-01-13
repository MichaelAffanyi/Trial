import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 3840px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
    overflow: hidden;
    display: none;

    .menu {
        position: relative;
        width: 255px;
        height: 100%;
        background: #2C6269;
        margin-left: auto;
    }

    .navLinks {
        position: absolute;
        top: 112px;
        width: 100%;
        height: 136px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        /* background: red; */

        span {
            font-weight: 500;
            font-size: 18px;
            line-height: 28px;
            color: #FFFFFF;
            margin-left: 48px;

            &:hover {
                color: #F67E7E;
            }
        }

        button {
            width: 159px;
            height: 48px;
            margin: 0 auto;
            background: transparent;
            border: 2px solid #fff;
            border-radius: 50px;
            font-weight: 500;
            font-size: 18px;
            line-height: 28px;
            text-align: center;
            color: #FFFFFF;
            padding: 10px 0;
            margin-top: 12px;

            &:hover {
                background: #fff;
                color: #2C6269;
            }
        }
    }

    @media (max-width: 450px) {
        display: block;
    }

    .bg-1 {
        position: absolute;
        top: 467px;
        right: -100px;
    }
`