import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 1002px;
    background: #004047;
    display: flex;
    align-items: center;
    justify-content: center;

    .bg-1 {
        position: absolute;
        top: 0;
        left: -100px;
    }
    .bg-2 {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .content {
        width: 1110px;
        height: 722px;
        background-color: red;

        .title {
            font-weight: 700;
            font-size: 48px;
            line-height: 48px;
            color: #FFFFFF;
            text-align: center;
        }
    }
`
export const Card = styled.div`
    /* position: relative; */
    width: 350px;
    height: 253px;
    background: #012F34;

    .front, .back {
        width: 350px;
        height: 253px;
        background: #012F34;
    }

    .back {
        background-color: green;
    }

    .container {
        width: 302px;
        height: 165px;
        background-color: blue;
        /* margin: 32px auto 0; */

        .profile {
            width: 96px;
            height: 96px;
            border: 2px solid #C4FFFE;
            border-radius: 50%;
            /* margin: 32px auto 16px; */

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: inherit;
            }
        }
    }
`