var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    //点击圆点切换
    paginationClickable: true,
    // 图片之间的距离
    spaceBetween: 30,
    // 默认状态下活动块居左，设定为true时，活动块会居中。
    centeredSlides: true,
    // 自动轮播时间
    autoplay: 3000,
    // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
    autoplayDisableOnInteraction: false,
    // 3D切换效果
    effect: 'fade',
    //左右滑动
    // direction: 'horizontal',
    // 设置为true则windows改变尺寸时swiper会重新初始化。
    resizeReInit: true,

    lazyLoading: true,
    preloadImages: false,
    // 当所有的内嵌图像（img标签）加载完成后Swiper会重新初始化。
    updateOnImagesReady: true,
    paginationClickable: true,
    // 图片之间的距离
    spaceBetween: 0,
    //slidesPerColumn参数
    slidesPerColumn: 1,
    //滑动速度，即slider自动滑动开始到结束的时间（单位ms）
    speed: 600,
    loop: true,
    initialSlide: 0,
    // 如果启用，仅有“可视”的slides会最后适应容器的大小
    visibilityFullFit: true,
});
