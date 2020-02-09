import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    background: #fff;
`;

export const Container = styled.div`
    width: 100%;
    height: 83%;
    display: flex
`;

export const HeaderWrapper = styled.div`
    background-color: #1976d2;
    height: 70px;
    text-align: center;
    border: 1px solid #999;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
`;

export const HeaderText = styled.div`
    font-family: cursive;
    color: #fff;
    font-size: 23px;
    padding: 20px;
`;

export const LeftContainer = styled.div`
    position: relative;
    height: 100%;
    min-width: 300px;
    background: #fff;
    text-align: center;
    margin: 5px;
    word-wrap: break-word;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;

export const LeftHeading = styled.div`
    height: calc(100% - 50px);
    overflow-y: scroll;
`;

export const LeftHeadingText = styled.div`
    background: #1776d3;
    border: none;
    display: block;
    color: white;
    padding: 10px;
    font-family: cursive;
    font-size: 18px;
`;

export const LeftNewNoteSection = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    padding-top: 10px
`;

export const LeftNoteButton = styled.button`
    margin: auto;
    padding: 10px 15px;
    border: none;
    transition: all 0.3s;
    cursor: pointer;
    color: #fff;
    background-color: #1976d2;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    &:hover {
        background: rgb(17, 82, 147);
    }
`;

export const RightWrapper = styled.div`
    height: 100%;
    width: 98%;
    background: #fff;
    border: none;
    margin: 5px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;

export const RightOuterWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-width: 500px;
    display: flex;
    background: #fff;
    align-items: center;
    justify-content: center;
    font-family: 'Source Sans Pro', sans-serif;
`;

export const RightInnerWrapper = styled.div`
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: transition(-50%, -50%);
    text-align: center;
    word-wrap: break-word;
    font-size: 13px
`;

export const RightNoteWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background: #fff;
    flex-direction: column
`;

export const RightNoteInputHeader = styled.input`
    width: 96%;
    margin: 10px 20px;
    height: 60px;
    display: block;
    font-size: 24px;
    font-family: 'Sansita',sans-serif;
    border: none;
    border-bottom: 1px solid #1776d3;
    outline: none;
`;

export const RightNoteInputDescription = styled.textarea`
    width: 96%;
    min-height: calc(100% - 92px);
    height: 20px;
    display: block;
    resize: none;
    border: none;
    outline: none;
    margin: 0 20px;
    font-size: 20px;
`;

export const LeftNoteTitleWrapper = styled.div`
    width: 91%;
    text-align: left;
    padding: 20px 14px;
    background: #fff;
    cursor: pointer;
    word-wrap: break-word;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border-bottom: 1px solid #eeeeee;
    font-family: 'Oxygen',sans-serif;
    color: #555;
    &:hover {
        background: #eee;
        color: #1976d2;
    }
`;

export const LeftNoteDeleteButton = styled.button`
    background: rgb(220, 0, 78);
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    padding: 5px;
    color: #fff;
    transition: all 0.3s;
    cursor: pointer;
    border: none;
    float: right;
    font-size: 10px;
    &:hover {
      background: rgb(154, 0, 54);
    }
    display: ${props => props.delete ? props.delete : "" };
`;

export const DeleteModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    width: 350px;
    height: 250px;
    border: none;
    top: 50%;
    left: 50%;
    transform: ${props => props.showWarning ? "translate(-50%, -50%)"  : "translate(-50%, -250%)" };
    opacity: ${props => props.showWarning ? 1 : 0.4 };
    background: #fff;
    z-index: 5;
    transition: all 0.5s;
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
`;

export const DeleteText = styled.div`
    display: block;
    margin: 5px
`;

export const DeleteModalButton = styled.button`
    display: block;
    margin: 5px;
    padding: 5px;
    background: rgb(220, 0, 78);
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    border: none;
    color: #fff;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        background: rgb(154, 0, 54);
    }
`;

export const DeleteModalCancelButton = styled.button`
    display: block;
    margin: 5px;
    padding: 5px;
    background: #ccc;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    border: none;
    color: #000;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        background: #000;
        color: #fff;
    }
`;

export const DeleteWarning = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    opacity: 0.7;
    transition: all 0.5s
`;