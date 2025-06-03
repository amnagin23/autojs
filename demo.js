const user = "83544693936";
launchApp("抖音")
descStartsWith("搜索").findOne().click();
sleep(1000);

let input = id("com.ss.android.ugc.aweme:id/et_search_kw").findOne();
sleep(1000);
input.setText(user);
sleep(1000);

// === 尝试点击“抖音号”结果项 ===
let douyinUser = descStartsWith("抖音号").findOne(3000); // 最多等3秒
if (douyinUser) {
     douyinUser.parent().click();
    sleep(1000);

    // === 尝试点击“关注”按钮 ===
    let followBtn = id('com.ss.android.ugc.aweme:id/t2t').text('关注').className("android.widget.TextView").findOne(3000);
    if (followBtn) {
     followBtn.click();
     sleep(1000);
} else {
     toast("你已经关注");
     exit();
 }

// === 尝试点击“私信”按钮 ===
    descStartsWith("私信").findOne(3000).click();
     sleep(1000);
     setText("你好,我看了你的作品觉得非常喜欢,可以交个朋友吗");
     sleep(1000);
     descStartsWith("发送").findOne(3000).click();
} else {
     toast("用户不存在或未找到抖音号结果");
}