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
        position: relative;
        width: 60%;
    }

    img {
            position: absolute;
            left: 0;
            bottom: 0;
        }

    span {
        font-weight: 700;
        font-size: 48px;
        line-height: 48px;
        color: #012F34;
    }

    button {
        position: absolute;
        right: 0;
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
        /* align-items: center;
        justify-content: center; */
        background: red;
    }
    
    .nav {
        color: #fff;
    }
`