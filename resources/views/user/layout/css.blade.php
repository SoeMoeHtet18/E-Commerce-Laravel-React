<style>
    body {
        background-color: #000000 !important;
    }
    #account-button{
        margin-left: 15px;
        color: #ffffff;
    }
    #account-button::after {
        display: none;
    }

   #account-setting {
        left: -118px;
        box-shadow: 0 0 5px #cccccc, 0 0 5px #cccccc, 0 0 5px #cccccc;
    }

    #account-setting li :hover{
        background-color: #1B3D51;
        color: #CCCCCC;
        border-radius: 4px;
    }

    .navbar-brand img {
        width: 1.5rem;
        height: 1.5rem;
        margin: 0px 1rem;
    }

    #search-box-container {
        width: 100%;
        position: relative;
    }

    #search {
        padding-left: 50px;
    }

    #search-icon {
        position: absolute;
        top: 12%;
        left: 10px;
        cursor: pointer;
        font-size: 30px;
    }

    #app-marketing-container {
        height: 60vh;
        width: 100%;
        background-color: white;
        padding: 0 15%;
        display: flex;
        justify-content: space-between;
        position: relative;
    }

    .color-tone {
        min-width: 80px;
        max-width: 150px;
        height: 100%;
    }

    .bg-main {
        background-color: #27ada4;
    }

    #app-marketing-title {
        position: absolute;
        top: 12%;
        left: 15%;
        font-size: 1.5rem;
        color: #3CD9D0;
    }

    #app-marketing-text {
        position: absolute;
        padding: 10px 0;
        top: 30%;
        left: 15%;
        font-size: 1.25rem;
        background-color: white;
        line-height: 2;
        z-index: 10;
    }
</style>