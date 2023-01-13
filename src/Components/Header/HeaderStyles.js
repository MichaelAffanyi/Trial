import styled from 'styled-components'

export const Nav = styled.div`
    position: relative;
    width: 80%;
    height: 48px;
    margin: 74px auto 130px;
    display: flex;
    gap: 40px;
    align-items: center;
    button {
        position: absolute;
        right: 0;
        background: transparent;
        width: 153px;
        height: 48px;
        color: #fff;
        border: 2px solid #fff;
        border-radius: 24px;
        padding: 10px;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        cursor: pointer;
        transition: all ease-in;

        &:hover {
            background: #fff;
            color: #002529;
        }

        @media (max-width: 450px) {
            display: none;
        }
    }
    span {
        color: #fff;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        cursor: pointer;

        &:hover {
            color: #F67E7E;
        }

        @media (max-width: 450px) {
            display: none;
        }
    }
    .hamburger, .close {
        position: absolute;
        right: 0;
        display: none;
        z-index: 10;

        @media (max-width: 450px) {
            display: block;
        }
    }

    @media (max-width: 450px) {
            width: 90%;
            margin: 48px auto 80px;
        }
`
export const Logo = styled.img`
    margin-right: 40px;
    cursor: pointer;

    @media (max-width: 950px) {
            margin-right: unset;
        }

    /* @media (max-width: 450px) {
            width: 128px;        
        } */
`