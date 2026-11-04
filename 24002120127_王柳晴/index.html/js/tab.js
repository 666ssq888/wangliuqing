/*
 * 文件：tab.js
 * 作者：王柳晴
 * 建立时间：2026-11-04 13:42
 * 使用大模型：GLM-5.3-Flash
 * 功能名称：可复用 tab 选项卡组件（事件委托 / 包含监听）
 */

/**
 * 功能：初始化一组 tab 选项卡，实现点击切换选中状态与内容面板。
 *      采用"包含监听"（事件委托）：把 click 事件绑定在选项卡容器 <ul> 上，
 *      子元素点击后冒泡到容器统一处理，因此函数可复用于页面中的任意选项卡组。
 * @param {string} wlq_barId       选项卡容器（<ul>）的 id
 * @param {string} wlq_activeClass 表示"选中状态"的 CSS 类名
 */
function wlq_initTabs(wlq_barId, wlq_activeClass) {
    var wlq_bar = document.getElementById(wlq_barId);
    if (!wlq_bar) return; // 容器不存在时不初始化

    // 包含监听：click 绑定在容器上，配合 closest 找到被点击的选项卡，实现可复用
    wlq_bar.addEventListener('click', function (wlq_e) {
        var wlq_tab = wlq_e.target.closest('.wlq_tab_item');
        if (!wlq_tab || !wlq_bar.contains(wlq_tab)) return; // 只处理本组内的选项卡

        // 第一步：先清除所有选项卡的选中状态
        var wlq_items = wlq_bar.querySelectorAll('.wlq_tab_item');
        for (var wlq_i = 0; wlq_i < wlq_items.length; wlq_i++) {
            wlq_items[wlq_i].classList.remove(wlq_activeClass);
        }

        // 第二步：再设置当前元素的选中状态
        wlq_tab.classList.add(wlq_activeClass);

        // 同步切换内容面板：先全部隐藏，再显示当前选项卡对应的新闻面板
        var wlq_section = wlq_tab.closest('.wlq_tabs');
        var wlq_panels = wlq_section.querySelectorAll('.wlq_tab_panel');
        for (var wlq_j = 0; wlq_j < wlq_panels.length; wlq_j++) {
            wlq_panels[wlq_j].classList.remove(wlq_activeClass);
        }
        var wlq_panel = document.getElementById(wlq_tab.getAttribute('data-wlq-panel'));
        if (wlq_panel) wlq_panel.classList.add(wlq_activeClass);
    });
}
