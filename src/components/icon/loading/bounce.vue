<template>
    <div class="ph-loading-bounce">
        <div class="ph-loading-indicator"></div>
    </div>
</template>
<style lang="scss">
@keyframes ph-bounce-loading{
    0%{
        height: 3px;
        opacity: .3;
    }
    100%{
        height: 16px;
        opacity: 1;
    }
}
.ph-loading-bounce{
    position: relative;
    width: 3px;
    height: 16px;
    
    .ph-loading-indicator,
    &:before,
    &:after{
        content: "";
        position: absolute;
        width: 3px;
        height: 16px;
        top:0;
        bottom: 0;
        margin: auto;
        background-color: currentColor;
        border-radius: 2px;
        backface-visibility: hidden;
    }
    &:before{
        animation: ph-bounce-loading .6s 0s infinite ease-in-out alternate both;
        left: -6px;
    }
    .ph-loading-indicator{
        background-color: currentColor;
        animation: ph-bounce-loading .6s .4s infinite ease-in-out alternate both;
    }
    &:after{
        animation: ph-bounce-loading .6s .8s infinite ease-in-out alternate both;
        right: -6px;
    }
}
</style>