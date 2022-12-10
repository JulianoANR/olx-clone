import styled from 'styled-components'

export const PageArea = styled.div`
    form {
        margin-top: 20px;
        background-color: #FFF;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;
        margin-bottom: 20px;

        .area {
            display: flex;
            align-items: center;
            padding: 10px;
            max-width: 500px;

            .area--title {
                width: 200px;
                text-align: right;
                padding-right: 20px;
                font-weight: bold;
                font-size: 14px;
            }

            .area--input {
                flex: 1;

                input {
                    width: 100%;
                    font-size: 14px;
                    padding: 5px;
                    border: 1px solid #DDD;
                    border-radius: 3px;
                    outline: none;

                    &:focus {
                        border: 1px solid #333;
                        color: #333;
                    }
                }

                button {
                    background-color: #0089FF;
                    border: 0;
                    outline: 0;
                    padding: 5px 10px;
                    border-radius: 4px;
                    color: #FFF;
                    font-size: 15px;
                    cursor: pointer;

                    &:hover {
                        background-color: #006FCE;
                    }
                }
            }
        }
    }

    .cards {
        background-color: #FFF;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;
        margin-bottom: 20px;
        max-width: 300px;
    }

    .list {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }

    .area-anuncio {
        .area--title-anuncio {
            text-align: right;
            padding-right: 20px;
            padding-left: 20px;
            font-weight: bold;
            font-size: 14px;
        }

        .area--text-anuncio {
            text-align: right;
            padding-right: 20px;
            padding-left: 20px;
            font-size: 12px;
        }
    }
`  
