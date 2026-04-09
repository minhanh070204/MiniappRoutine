import os
import re

# --- index.html ---
file_path = "c:/Users/Le Minh Anh/Downloads/Minapp_Routine/bo-suu-tap-theo-mau-main/index.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

html = html.replace('KHÁM PHÁ NGAY', 'QUYỀN LỢI THÀNH VIÊN')
html = html.replace("showView('loyalty')", "showView('offers')")
html = html.replace("<!-- VIEW: LOYALTY -->", "<!-- VIEW: MEMBERSHIP -->")
html = html.replace('<div id="view-loyalty" class="view-section hidden">', '<div id="view-membership" class="view-section hidden">')

# Modify the VIP card in Membership to add conditions and exchange points
vip_card_loyalty = """                <div class="vip-card mb-8">
                    <p class="text-xs uppercase font-semibold text-muted mb-2 tracking-wide">Silver Member</p>
                    <h2 class="text-3xl font-bold mb-8">Lê Minh Anh</h2>
                    <div class="flex justify-between items-end">
                        <div>
                            <p class="text-xs text-muted mb-1 uppercase">Điểm hiện có</p>
                            <p class="text-2xl font-bold" id="membership-points">1,250</p>
                        </div>
                        <span class="material-symbols-outlined" style="font-size: 40px; opacity: 0.8;">workspaces</span>
                    </div>
                    <button class="btn btn-outline mt-6" style="border-color: rgba(255,255,255,0.2); color: white;" onclick="showTiers()">CHI TIẾT HẠNG</button>
                    <!-- NEW SIGN -->
                    <div class="flex justify-between mt-4">
                         <span class="text-xs text-white underline cursor-pointer" onclick="openOverlay('policies')">Điều kiện đổi điểm</span>
                         <span class="text-xs text-white underline cursor-pointer" onclick="showTiers()">Quyền lợi Routine Rewards</span>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-sm font-bold uppercase mb-4 text-muted">Đổi Voucher</h3>
                    <div class="card flex gap-2 items-center mb-4">
                        <input type="number" id="point-input" placeholder="Nhập điểm cần đổi" class="border-none p-2 flex-1 outline-none font-bold" style="background:#f4f4f5; border-radius:8px; width: 120px;" oninput="updateVoucherPreview()">
                        <span class="material-symbols-outlined text-gray">arrow_right_alt</span>
                        <div id="voucher-preview" class="font-bold text-accent px-2 whitespace-nowrap" style="min-width:90px;">Voucher 0đ</div>
                    </div>
                    <button class="btn" onclick="redeemCustomPoints()">XÁC NHẬN ĐỔI</button>
                </div>

                <div class="mb-8">
                    <h3 class="text-sm font-bold uppercase mb-4 text-muted">Thông Tin Membership</h3>
                    <div class="card p-4">
                        <p class="text-sm mb-2"><span class="font-bold text-gray">Họ tên:</span> Lê Minh Anh</p>
                        <p class="text-sm mb-2"><span class="font-bold text-gray">Giới tính:</span> Nam</p>
                        <p class="text-sm mb-2"><span class="font-bold text-gray">Ngày sinh:</span> 15/08/1998</p>
                        <hr class="my-3 border-border">
                        <div class="input-wrapper mb-3"><input type="text" placeholder="Nghề nghiệp hiện tại" value="Nhân viên văn phòng"></div>
                        <div class="input-wrapper mb-3"><input type="text" placeholder="Nơi sinh sống" value="Hà Nội"></div>
                        <div class="input-wrapper mb-3"><input type="text" placeholder="Nhóm sản phẩm yêu thích" value="Áo thun cơ bản"></div>
                        <button class="btn mt-2 h-10 text-xs">CẬP NHẬT THÔNG TIN</button>
                    </div>
                </div>

                <div class="mb-4">
                    <h3 class="text-sm font-bold uppercase mb-4 text-muted">Routine Wrapped</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="card p-3 flex flex-col justify-center items-center text-center cursor-pointer" onclick="alert('Danh hiệu: Cỗ Máy Tiêu Tiền!')">
                            <span class="material-symbols-outlined text-accent mb-1">payments</span>
                            <p class="text-xs text-gray">Đã chi tiêu</p>
                            <p class="font-bold">12,500K</p>
                        </div>
                        <div class="card p-3 flex flex-col justify-center items-center text-center cursor-pointer" onclick="alert('Danh hiệu: Thợ Săn Sale!')">
                            <span class="material-symbols-outlined text-success mb-1">savings</span>
                            <p class="text-xs text-gray">Đã tiết kiệm</p>
                            <p class="font-bold">1,850K</p>
                        </div>
                        <div class="card p-3 flex flex-col justify-center items-center text-center cursor-pointer" onclick="alert('Danh hiệu: Gương Mặt Thân Quen!')">
                            <span class="material-symbols-outlined text-accent mb-1">shopping_bag</span>
                            <p class="text-xs text-gray">Số lần mua sắm</p>
                            <p class="font-bold">14 lần</p>
                        </div>
                        <div class="card p-3 flex flex-col justify-center items-center text-center cursor-pointer" onclick="alert('Danh hiệu: Khách Ruột Nguyễn Trãi!')">
                            <span class="material-symbols-outlined text-accent mb-1">store</span>
                            <p class="text-xs text-gray">CH Yêu thích</p>
                            <p class="font-bold text-xs">Routine Nguyễn Trãi</p>
                        </div>
                        <div class="card p-3 flex flex-col justify-center items-center text-center cursor-pointer" onclick="alert('Danh hiệu: Thành Viên Thân Thiết!')">
                            <span class="material-symbols-outlined text-accent mb-1">workspace_premium</span>
                            <p class="text-xs text-gray">Hạng cao nhất</p>
                            <p class="font-bold">Silver</p>
                        </div>
                        <div class="card p-3 flex flex-col justify-center items-center text-center cursor-pointer" onclick="alert('Danh hiệu: Chuyên Gia Mặc Đẹp!')">
                            <span class="material-symbols-outlined text-accent mb-1">checkroom</span>
                            <p class="text-xs text-gray">Dòng chân ái</p>
                            <p class="font-bold">Quần Jean</p>
                        </div>
                    </div>
                </div>"""

# replace `view-loyalty` contents
html = re.sub(r'<div class="vip-card mb-8">.+?(?=</div>\s*</div>\s*<!-- VIEW: CỬA HÀNG -->)', vip_card_loyalty, html, flags=re.DOTALL)

# Now edit view-stores to view-offers
offers_view = """<!-- VIEW: OFFERS -->
        <div id="view-offers" class="view-section hidden">
            <div class="px-4 py-2 sticky" style="top: var(--header-height); background: var(--glass-bg); backdrop-filter: var(--glass-blur); z-index: 10;">
                <div class="tabs" style="margin-bottom: 8px;">
                    <div class="tab active offer-tab" onclick="switchOffersTab('voucher')">VOUCHER</div>
                    <div class="tab offer-tab" onclick="switchOffersTab('gift')">QUÀ TẶNG</div>
                </div>
            </div>
            <div class="p-4">
                <div id="offers-voucher-content">
                    <div id="user-vouchers" class="flex flex-col gap-3"></div>
                    <button class="btn btn-outline w-full mt-6" onclick="openOverlay('history-voucher')">LỊCH SỬ VOUCHER</button>
                </div>
                <div id="offers-gift-content" class="hidden">
                    <div id="user-gifts" class="flex flex-col gap-3">
                        <!-- Example gift -->
                        <div class="card p-4 flex justify-between items-center opacity-75">
                            <div class="flex items-center gap-4">
                                <div style="width:40px;height:40px; border-radius:8px; background:#f4f4f5; display:flex; align-items:center; justify-content:center;">
                                    <span class="material-symbols-outlined text-accent">redeem</span>
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-accent">Túi Tote Routine</h3>
                                    <p class="text-xs text-muted">HSD: 30/04/2026 • Số lượng: 0</p>
                                </div>
                            </div>
                            <span class="material-symbols-outlined text-gray" style="font-size:18px;">chevron_right</span>
                        </div>
                    </div>
                    <button class="btn btn-outline w-full mt-6" onclick="openOverlay('history-gift')">LỊCH SỬ QUÀ TẶNG</button>
                </div>
            </div>
        </div>"""

html = re.sub(r'<!-- VIEW: CỬA HÀNG -->.+?(?=<!-- VIEW: CÁ NHÂN -->)', offers_view + '\n\n        ', html, flags=re.DOTALL)

# Add store search button to personal menu
html = html.replace("""<div class="menu-item" onclick="openOverlay('order-history')">""", """<div class="menu-item" onclick="openOverlay('store-search')">
                        <span class="text-sm font-semibold">Tìm kiếm cửa hàng</span>
                        <span class="material-symbols-outlined text-gray">chevron_right</span>
                    </div>
                    <div class="menu-item" onclick="openOverlay('order-history')">""")

# Update bottom nav
nav_html = """        <nav class="bottom-nav">
            <a href="javascript:void(0)" class="nav-item active" id="nav-home" onclick="showView('home')">
                <span class="material-symbols-outlined">home</span>
                <span>Trang chủ</span>
            </a>
            <a href="javascript:void(0)" class="nav-item" id="nav-shop" onclick="showView('shop')">
                <span class="material-symbols-outlined">search</span>
                <span>Sản phẩm</span>
            </a>
            <a href="javascript:void(0)" class="nav-item" id="nav-membership" onclick="showView('membership')">
                <span class="material-symbols-outlined">card_membership</span>
                <span>Membership</span>
            </a>
            <a href="javascript:void(0)" class="nav-item" id="nav-offers" onclick="showView('offers')">
                <span class="material-symbols-outlined">local_activity</span>
                <span>Ưu đãi</span>
            </a>
            <a href="javascript:void(0)" class="nav-item" id="nav-account" onclick="showView('account')">
                <span class="material-symbols-outlined">person</span>
                <span>Cá nhân</span>
            </a>
        </nav>"""
html = re.sub(r'<nav class="bottom-nav">.+?</nav>', nav_html, html, flags=re.DOTALL)

# Add store search overlay
store_overlay = """        <!-- STORE SEARCH OVERLAY -->
        <div id="overlay-store-search" class="overlay-view hidden">
            <header class="overlay-header">
                <span class="material-symbols-outlined back-btn" onclick="closeOverlay('store-search')">arrow_back</span>
                <span class="flex-1 text-center font-bold uppercase text-sm tracking-wide">Hệ thống cửa hàng</span>
                <div style="width: 40px"></div>
            </header>
            <div class="overlay-content p-4">
                <div class="card mb-6" style="background: var(--accent); color: white; padding: 24px;">
                    <p class="text-xs uppercase font-bold text-muted mb-2 tracking-wide text-white">Gần bạn nhất</p>
                    <h3 class="text-xl font-bold mb-2">Routine Nguyễn Trãi</h3>
                    <p class="text-xs opacity-80 mb-6">554 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
                    <button class="btn btn-outline" style="border-color: rgba(255,255,255,0.3); color: white;" onclick="openBooking('Routine Nguyễn Trãi')">ĐẶT LỊCH THỬ ĐỒ</button>
                </div>
                <div class="tabs mb-4">
                    <div class="tab store-tab active" onclick="renderStores('Tất cả', this)">Tất cả</div>
                    <div class="tab store-tab" onclick="renderStores('Hà Nội', this)">Hà Nội</div>
                    <div class="tab store-tab" onclick="renderStores('TP HCM', this)">TP HCM</div>
                </div>
                <div id="store-list" class="flex flex-col gap-4"></div>
            </div>
        </div>

        <!-- HISTORY OVERLAYS -->
        <div id="overlay-history-voucher" class="overlay-view hidden">
            <header class="overlay-header">
                <span class="material-symbols-outlined back-btn" onclick="closeOverlay('history-voucher')">arrow_back</span>
                <span class="flex-1 text-center font-bold uppercase text-sm tracking-wide">Lịch sử Voucher</span>
                <div style="width: 40px"></div>
            </header>
            <div class="overlay-content p-4 flex flex-col items-center justify-center pt-20">
                <span class="material-symbols-outlined mb-2 text-gray" style="font-size:32px;">history</span>
                <p class="text-sm text-gray">Không có voucher đã sử dụng hoặc quá hạn.</p>
            </div>
        </div>

        <div id="overlay-history-gift" class="overlay-view hidden">
            <header class="overlay-header">
                <span class="material-symbols-outlined back-btn" onclick="closeOverlay('history-gift')">arrow_back</span>
                <span class="flex-1 text-center font-bold uppercase text-sm tracking-wide">Lịch sử Quà Tặng</span>
                <div style="width: 40px"></div>
            </header>
            <div class="overlay-content p-4 flex flex-col items-center justify-center pt-20">
                <span class="material-symbols-outlined mb-2 text-gray" style="font-size:32px;">history</span>
                <p class="text-sm text-gray">Không có quà tặng đã sử dụng hoặc quá hạn.</p>
            </div>
        </div>

        <!-- NEW POPUP TO DISPLAY SUCCESS兑换 -->
        <div id="overlay-point-success" class="overlay-view hidden justify-center items-center p-6 text-center text-black" style="background: rgba(0,0,0,0.5); z-index: 1000; display:none;">
             <div class="card p-6 w-full max-w-sm" style="margin: auto;">
                 <h2 class="text-xl font-bold mb-2">Chúc mừng bạn</h2>
                 <p class="text-sm mb-4" id="point-success-text">đã nhận Voucher mua sắm</p>
                 <div class="text-left bg-gray-100 p-3 rounded mb-4" style="background: #f4f4f5">
                     <p class="text-xs text-gray align-left"><b>ĐK Sử dụng:</b> Áp dụng hóa đơn nguyên giá</p>
                     <p class="text-xs text-gray align-left"><b>HSD:</b> 30 ngày kể từ ngày quy đổi</p>
                 </div>
                 <button class="btn" onclick="document.getElementById('overlay-point-success').style.display='none'; document.getElementById('overlay-point-success').classList.add('hidden');">ĐÓNG</button>
             </div>
        </div>
"""

html = html.replace('<!-- OVELAYS -->', '<!-- OVELAYS -->\n' + store_overlay)

# Replace policies text
new_policies = """            <div class="overlay-content p-6 text-sm text-gray leading-relaxed">
                <h3 class="text-base font-bold text-accent mb-2">1. Thông tin chung</h3>
                <p class="mb-2">Có 2 loại điểm tích lũy:</p>
                <ul class="list-disc pl-5 mb-4 space-y-1">
                    <li><strong class="text-black">Điểm đổi quà:</strong> dùng để đổi điểm lấy quà.</li>
                    <li><strong class="text-black">Điểm tích lũy xét hạng:</strong> là tổng điểm được tính bằng với tổng số tiền trên hóa đơn mỗi khách hàng đã mua trong 12 tháng gần nhất, dùng để xét hạn mức thẻ (Member, Silver, Gold, Diamond).</li>
                </ul>
                <p class="mb-4"><strong class="text-black">Giá trị quy đổi điểm:</strong> 10.000 VNĐ = 1 điểm</p>

                <h3 class="text-base font-bold text-accent mb-2">2. Quy định điểm</h3>
                <p class="mb-2">Điểm tích lũy sẽ được cộng vào tài khoản thành viên sau 24h tính từ thời điểm xuất hóa đơn.</p>
                <p class="mb-4">Điểm xét hạng và điểm đổi quà sẽ có hạn sử dụng trong vòng 12 tháng tính từ thời điểm tích lũy điểm thành công. Sau 12 tháng, hệ thống sẽ tự động trừ đi số điểm hết hạn.</p>

                <h3 class="text-base font-bold text-accent mb-2">3. Điều kiện và quyền lợi</h3>
                <p class="mb-4">Xem mục hạn mức thành viên (Membership) để xem chi tiết điều kiện duy trì hạng và nội dung giảm giá của từng hạng mức.</p>
            </div>"""

html = re.sub(r'<div class="overlay-content p-6 text-sm text-gray leading-relaxed">.+?</div>', new_policies, html, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)


# --- main.js ---
file_path_js = "c:/Users/Le Minh Anh/Downloads/Minapp_Routine/bo-suu-tap-theo-mau-main/main.js"
with open(file_path_js, "r", encoding="utf-8") as f:
    js = f.read()

# Replace showView cases
js = js.replace("const views = ['home', 'shop', 'loyalty', 'stores', 'account'];", "const views = ['home', 'shop', 'membership', 'offers', 'account'];")
js = js.replace("if (viewId === 'loyalty') renderVouchers();", "if (viewId === 'offers') renderVouchers();\n    if (viewId === 'membership') renderHomePoints();")
js = js.replace("if (viewId === 'stores') renderStores('Tất cả', document.querySelector('.store-tab'));", "if (viewId === 'account') renderStores('Tất cả', document.querySelector('.store-tab'));")
js = js.replace("showView('loyalty')", "showView('membership')")

# Add new functions for offers tabs and custom redeeming
custom_js = """
function switchOffersTab(tabId) {
    document.querySelectorAll('.offer-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    document.getElementById('offers-voucher-content').classList.add('hidden');
    document.getElementById('offers-gift-content').classList.add('hidden');
    document.getElementById('offers-' + tabId + '-content').classList.remove('hidden');
}

function renderHomePoints() {
    const el = document.getElementById('membership-points');
    if (el) el.innerText = userPoints.toLocaleString();
}

function updateVoucherPreview() {
    const ipt = document.getElementById('point-input').value;
    const pts = parseInt(ipt) || 0;
    const value = pts * 100; // 1 điểm = 100vnđ voucher
    document.getElementById('voucher-preview').innerText = `Voucher ${(value/1000)}K`;
}

function redeemCustomPoints() {
    const ipt = document.getElementById('point-input').value;
    const pts = parseInt(ipt);
    if (!pts || pts <= 0) return alert('Vui lòng nhập số điểm hợp lệ');
    if (userPoints < pts) return alert('Không đủ điểm!');
    
    userPoints -= pts;
    renderHomePoints();
    document.getElementById('home-points').innerText = userPoints.toLocaleString();
    
    const valueK = (pts * 100) / 1000;
    
    userVouchers.push({
        name: `Vou. ${valueK}K`,
        value: `Giảm ${valueK}K`,
        amount: valueK * 1000,
        mode: 'fixed'
    });
    
    renderVouchers();
    document.getElementById('point-success-text').innerText = `đã có Voucher mua sắm ${valueK}K! Voucher đã được tự động lưu trữ vào mục Ưu đãi.`;
    document.getElementById('point-input').value = '';
    updateVoucherPreview();
    
    const overlay = document.getElementById('overlay-point-success');
    overlay.classList.remove('hidden');
    overlay.style.display = 'flex';
}
"""

js = js + "\n" + custom_js

# update showTiers
js = js.replace("renderTier('silver');", "renderTier('MEMBER');")

# Replace renderTier function
new_tier_html = """
        <div class="tabs mb-6" style="gap: 4px; justify-content: space-between; border: none; background: #f4f4f5; border-radius: 12px; padding: 4px;">
            <div class="tab tier-tab text-center flex-1" style="border-radius:8px; padding: 8px 0; font-size: 11px; font-weight:700;" onclick="renderTier('MEMBER')">MEMBER</div>
            <div class="tab tier-tab text-center flex-1" style="border-radius:8px; padding: 8px 0; font-size: 11px; font-weight:700;" onclick="renderTier('SILVER')">SILVER</div>
            <div class="tab tier-tab text-center flex-1" style="border-radius:8px; padding: 8px 0; font-size: 11px; font-weight:700;" onclick="renderTier('GOLD')">GOLD</div>
            <div class="tab tier-tab text-center flex-1" style="border-radius:8px; padding: 8px 0; font-size: 11px; font-weight:700;" onclick="renderTier('DIAMOND')">DIAMOND</div>
        </div>
"""

rt_logic = """function renderTier(level) {
    const tabs = document.querySelectorAll('.tier-tab');
    if (tabs.length === 0) {
        /* In case we need to inject the tabs if they were overwritten */
        const content = document.querySelector('#overlay-tier-details .overlay-content');
        if(content && !content.querySelector('.tier-tab')) {
             const tabsHtml = `
             <div class="tabs mb-6" style="gap: 4px; justify-content: space-between; border: none; background: #f4f4f5; border-radius: 12px; padding: 4px;">
                <div class="tab tier-tab text-center flex-1" style="border-radius:8px; padding: 8px 0; font-size: 11px; font-weight:700; color:var(--text-muted);" onclick="renderTier('MEMBER')">MEMBER</div>
                <div class="tab tier-tab text-center flex-1" style="border-radius:8px; padding: 8px 0; font-size: 11px; font-weight:700; color:var(--text-muted);" onclick="renderTier('SILVER')">SILVER</div>
                <div class="tab tier-tab text-center flex-1" style="border-radius:8px; padding: 8px 0; font-size: 11px; font-weight:700; color:var(--text-muted);" onclick="renderTier('GOLD')">GOLD</div>
                <div class="tab tier-tab text-center flex-1" style="border-radius:8px; padding: 8px 0; font-size: 11px; font-weight:700; color:var(--text-muted);" onclick="renderTier('DIAMOND')">DIAMOND</div>
            </div>`;
             const dyn = document.getElementById('tier-content-dynamic');
             dyn.parentElement.insertAdjacentHTML('afterbegin', tabsHtml);
        }
    }
    const currentTabs = document.querySelectorAll('.tier-tab');
    currentTabs.forEach(t => {
        t.classList.remove('active');
        t.style.background = 'transparent';
        t.style.boxShadow = 'none';
        t.style.color = 'var(--text-muted)';
    });
    
    let idx = 0;
    if(level === 'SILVER') idx = 1;
    if(level === 'GOLD') idx = 2;
    if(level === 'DIAMOND') idx = 3;
    
    if(currentTabs.length > 0) {
        const activeTab = currentTabs[idx];
        activeTab.classList.add('active');
        activeTab.style.background = 'white';
        activeTab.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        activeTab.style.color = 'var(--accent)';
    }

    const dynamicContent = document.getElementById('tier-content-dynamic');
    
    if (level === 'MEMBER') {
        dynamicContent.innerHTML = `
            <div class="card p-5 mt-4">
                <h3 class="text-sm font-bold uppercase mb-4 text-accent">Member</h3>
                <div class="flex flex-col gap-3">
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Quyền lợi thành viên</p>
                            <p class="text-xs text-gray mt-1">Giảm 20% ưu đãi sinh nhật. Nhận ưu đãi 20% áp dụng 01 hóa đơn mua sắm trong tháng sinh nhật.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (level === 'SILVER') {
        dynamicContent.innerHTML = `
            <div class="card p-5 mt-4">
                <h3 class="text-sm font-bold uppercase mb-4 text-[#8a8d91]">Silver</h3>
                <div class="flex flex-col gap-3">
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Quyền lợi thành viên</p>
                            <p class="text-xs text-gray mt-1">Giảm 5% cho thành viên (Áp dụng cho hóa đơn mua sắm trong năm hạng mức).</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Ưu đãi sinh nhật</p>
                            <p class="text-xs text-gray mt-1">Giảm 20% ưu đãi sinh nhật. Nhận ưu đãi 20% áp dụng 01 hóa đơn mua sắm trong tháng sinh nhật.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (level === 'GOLD') {
        dynamicContent.innerHTML = `
            <div class="card p-5 mt-4">
                <h3 class="text-sm font-bold uppercase mb-4 text-[#FF8A00]">Gold</h3>
                <div class="flex flex-col gap-3">
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Quyền lợi thành viên</p>
                            <p class="text-xs text-gray mt-1">Giảm 10% cho thành viên (Áp dụng cho hóa đơn mua sắm trong năm hạng mức).</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Ưu đãi sinh nhật</p>
                            <p class="text-xs text-gray mt-1">Giảm 20% ưu đãi sinh nhật. Nhận ưu đãi 20% áp dụng 01 hóa đơn mua sắm trong tháng sinh nhật.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (level === 'DIAMOND') {
        dynamicContent.innerHTML = `
            <div class="card p-5 mt-4">
                <h3 class="text-sm font-bold uppercase mb-4 text-[#00a8ff]">Diamond</h3>
                <div class="flex flex-col gap-3">
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Quyền lợi thành viên</p>
                            <p class="text-xs text-gray mt-1">Giảm 20% cho thành viên (Áp dụng cho hóa đơn mua sắm trong năm hạng mức).</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Ưu đãi sinh nhật</p>
                            <p class="text-xs text-gray mt-1">Giảm 25% ưu đãi sinh nhật. Nhận ưu đãi 25% áp dụng 01 hóa đơn mua sắm trong tháng sinh nhật.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}"""

# Need to replace the whole renderTier block
js = re.sub(r'function renderTier\(level\) \{.+?\}\s*\}', rt_logic, js, flags=re.DOTALL)

with open(file_path_js, "w", encoding="utf-8") as f:
    f.write(js)
