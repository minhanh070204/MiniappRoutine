// --- DATA ---
const PRODUCTS = {
    nam: [
        { id: 'm1', name: 'Áo Nỉ Đỏ Thêu Họa Tiết', price: 650000, img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600' },
        { id: 'm3', name: 'Áo Polo Cotton Trơn', price: 390000, img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600' },
        { id: 'm4', name: 'Quần Short Kaki', price: 450000, img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=600' },
        { id: 'm5', name: 'Áo Khoác Blazer Navy Basic', price: 1250000, img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=600' },
        { id: 'm6', name: 'Quần Jean Straight Fit Denim', price: 890000, img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600' },
        { id: 'm7', name: 'Áo Sơ Mi Linen Cổ Tàu', price: 550000, img: 'https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=600' }
    ],
    nu: [
        { id: 'w1', name: 'Áo Thun Cotton Nữ', price: 290000, img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600' },
        { id: 'w2', name: 'Quần Jean Suông', price: 750000, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600' },
        { id: 'w3', name: 'Áo Sơ Mi Form Rộng', price: 590000, img: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=600' },
        { id: 'w4', name: 'Chân Váy Midi Xếp Ly', price: 690000, img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=600' },
        { id: 'w5', name: 'Áo Len Dệt Kim Tay Dài', price: 790000, img: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?q=80&w=600' },
        { id: 'w6', name: 'Quần Tây Slim Fit Nữ', price: 650000, img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600' }
    ]
};

const STORES = [
    { name: 'Routine Nguyễn Trãi', address: '554 Nguyễn Trãi, Thanh Xuân, Hà Nội', city: 'Hà Nội' },
    { name: 'Routine Bà Triệu', address: '12 Bà Triệu, Hoàn Kiếm, Hà Nội', city: 'Hà Nội' },
    { name: 'Routine Cầu Giấy', address: '234 Cầu Giấy, Hà Nội', city: 'Hà Nội' },
    { name: 'Routine Lý Tự Trọng', address: '120 Lý Tự Trọng, Quận 1, TP. HCM', city: 'TP HCM' },
    { name: 'Routine Võ Văn Ngân', address: '242 Võ Văn Ngân, Thủ Đức, TP. HCM', city: 'TP HCM' },
    { name: 'Routine CMT8', address: '640 CMT8, Quận 3, TP. HCM', city: 'TP HCM' }
];

// --- STATE ---
let currentCart = [];
let currentProduct = null;
let userPoints = 1250;
let userVouchers = [
    { name: 'WELCOME', value: 'Giảm 10%', amount: 0.1, mode: 'percent' }
];
let appliedVoucher = null;

// --- NAVIGATION ---
const views = ['home', 'shop', 'loyalty', 'stores', 'account'];

function showView(viewId) {
    views.forEach(v => {
        const el = document.getElementById(`view-${v}`);
        const nav = document.getElementById(`nav-${v}`);
        if(el) el.classList.add('hidden');
        if(nav) nav.classList.remove('active');
    });
    document.getElementById(`view-${viewId}`).classList.remove('hidden');
    document.getElementById(`nav-${viewId}`).classList.add('active');
    
    // Scroll to top
    window.scrollTo(0,0);

    if (viewId === 'home') renderHome();
    if (viewId === 'shop') renderShop('nam');
    if (viewId === 'stores') renderStores('Tất cả', document.querySelector('.store-tab'));
    if (viewId === 'loyalty') renderVouchers();
    
    updateFloatingCart();
}

function openOverlay(id) {
    document.getElementById(`overlay-${id}`).classList.remove('hidden');
}

function closeOverlay(id) {
    document.getElementById(`overlay-${id}`).classList.add('hidden');
}

function closeAllOverlays() {
    document.querySelectorAll('.overlay-view').forEach(el => el.classList.add('hidden'));
}

// --- RENDER SHOP ---
function renderHome() {
    const featured = [...PRODUCTS.nam.slice(0,2), ...PRODUCTS.nu.slice(0,2)];
    document.getElementById('home-featured-products').innerHTML = featured.map(p => createHTMLCard(p)).join('');
}

function renderShop(tab) {
    document.getElementById('shop-product-grid').innerHTML = PRODUCTS[tab].map(p => createHTMLCard(p)).join('');
}

function switchShopTab(tab) {
    document.querySelectorAll('.tab:not(.store-tab)').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('shop-search').value = '';
    renderShop(tab);
}

function handleSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
        switchShopTab(document.querySelector('.tab.active').innerText.toLowerCase() === 'nữ' ? 'nu' : 'nam');
        return;
    }
    const all = [...PRODUCTS.nam, ...PRODUCTS.nu];
    const unique = all.filter((v,i,a) => a.findIndex(t => t.id === v.id) === i);
    const filtered = unique.filter(p => p.name.toLowerCase().includes(q));
    
    if(filtered.length === 0) {
        document.getElementById('shop-product-grid').innerHTML = '<p class="text-center text-gray pt-8 col-span-2" style="grid-column: 1/-1;">Không có sản phẩm phù hợp</p>';
    } else {
        document.getElementById('shop-product-grid').innerHTML = filtered.map(p => createHTMLCard(p)).join('');
    }
}

function createHTMLCard(p) {
    return `
        <div class="product-card" onclick="viewProduct('${p.id}')">
            <div class="img-wrapper">
                <img src="${p.img}">
            </div>
            <p class="product-title">${p.name}</p>
            <p class="product-price">${p.price.toLocaleString()}đ</p>
        </div>
    `;
}

// --- PRODUCT DETAIL ---
function viewProduct(id) {
    const all = [...PRODUCTS.nam, ...PRODUCTS.nu];
    currentProduct = all.find(p => p.id === id);
    if(!currentProduct) return;

    document.getElementById('pd-img').src = currentProduct.img;
    document.getElementById('pd-name').innerText = currentProduct.name;
    document.getElementById('pd-price').innerText = currentProduct.price.toLocaleString() + 'đ';
    openOverlay('product-detail');
}

function selectSize(el) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
}

// --- CART ---
function addToCart() {
    const existing = currentCart.find(i => i.id === currentProduct.id);
    if (existing) {
        existing.qty++;
    } else {
        currentCart.push({...currentProduct, qty: 1});
    }
    closeOverlay('product-detail');
    updateFloatingCart();
    renderCart();
    openOverlay('cart');
}

function renderCart() {
    const container = document.getElementById('cart-items');
    if (currentCart.length === 0) {
        container.innerHTML = '<div class="flex-1 flex items-center justify-center text-gray">Giỏ hàng trống</div>';
        updateTotals(0);
        return;
    }

    container.innerHTML = currentCart.map((item, idx) => `
        <div class="cart-item">
            <img src="${item.img}" style="width:80px; height:100px; border-radius:8px; object-fit:cover;">
            <div class="flex flex-col justify-between flex-1">
                <div>
                    <p class="text-sm font-bold">${item.name}</p>
                    <p class="text-accent font-bold mt-1">${item.price.toLocaleString()}đ</p>
                </div>
                <div class="flex justify-between items-center mt-2">
                    <div class="flex items-center gap-3">
                        <div class="cart-qty-btn" onclick="updateQty(${idx}, -1)">-</div>
                        <span class="text-sm font-semibold">${item.qty}</span>
                        <div class="cart-qty-btn" onclick="updateQty(${idx}, 1)">+</div>
                    </div>
                    <span class="material-symbols-outlined text-gray cursor-pointer" onclick="removeItem(${idx})">delete</span>
                </div>
            </div>
        </div>
    `).join('');

    const subtotal = currentCart.reduce((sum, it) => sum + (it.price * it.qty), 0);
    updateTotals(subtotal);
}

function updateQty(idx, d) {
    currentCart[idx].qty += d;
    if(currentCart[idx].qty < 1) currentCart[idx].qty = 1;
    renderCart();
}

function removeItem(idx) {
    currentCart.splice(idx, 1);
    renderCart();
    updateFloatingCart();
}

function updateTotals(subTotal) {
    let discount = 0;
    if (appliedVoucher) {
        if(appliedVoucher.mode === 'percent') {
            discount = subTotal * appliedVoucher.amount;
        } else {
            discount = appliedVoucher.amount;
        }
    }
    if (discount > subTotal) discount = subTotal;
    
    const final = subTotal - discount;

    const ct = document.getElementById('cart-total');
    if(ct) ct.innerText = final.toLocaleString() + 'đ';
    
    const csub = document.getElementById('co-subtotal');
    if(csub) csub.innerText = subTotal.toLocaleString() + 'đ';
    
    const cdis = document.getElementById('co-discount');
    if(cdis) cdis.innerText = '-' + discount.toLocaleString() + 'đ';
    
    const cfin = document.getElementById('co-final');
    if(cfin) cfin.innerText = final.toLocaleString() + 'đ';
}

function updateFloatingCart() {
    const fcart = document.getElementById('floating-cart');
    const badge = document.getElementById('cart-badge');
    const sections = ['home', 'shop', 'loyalty', 'stores'];
    const activeView = views.find(v => !document.getElementById(`view-${v}`).classList.contains('hidden'));
    
    if (currentCart.length > 0 && sections.includes(activeView)) {
        fcart.style.display = 'flex';
        const t = currentCart.reduce((sum, item) => sum + item.qty, 0);
        badge.innerText = t;
    } else {
        fcart.style.display = 'none';
    }
}

// --- CHECKOUT ---
function openCheckout() {
    if(currentCart.length === 0) return;
    appliedVoucher = null;
    document.getElementById('co-voucherName').innerText = 'Chọn ưu đãi';
    renderCart();
    openOverlay('checkout');
}

function placeOrder() {
    closeAllOverlays();
    currentCart = [];
    appliedVoucher = null;
    updateFloatingCart();
    openOverlay('success');
}

// --- VOUCHERS ---
function redeemVoucher(val) {
    const cost = val === 50 ? 500 : 900;
    if(userPoints < cost) return alert('Không đủ điểm!');
    userPoints -= cost;
    document.getElementById('home-points').innerText = userPoints.toLocaleString();
    
    userVouchers.push({
        name: `Vou. ${val}K`,
        value: `Giảm ${val}K`,
        amount: val * 1000,
        mode: 'fixed'
    });
    alert(`Đổi Voucher ${val}K thành công!`);
    renderVouchers();
}

function renderVouchers() {
    const container1 = document.getElementById('user-vouchers');
    const container2 = document.getElementById('voucher-list');
    
    const html = userVouchers.map((v, i) => `
        <div class="card flex justify-between items-center cursor-pointer" onclick="selectVoucher(${i})">
            <div class="flex items-center gap-4">
                <div style="width:40px;height:40px; border-radius:8px; background:#f4f4f5; display:flex; align-items:center; justify-content:center;">
                    <span class="material-symbols-outlined text-accent">receipt_long</span>
                </div>
                <div>
                    <h3 class="text-sm font-bold text-accent">${v.name}</h3>
                    <p class="text-xs text-muted">${v.value}</p>
                </div>
            </div>
            <span class="material-symbols-outlined text-gray" style="font-size:18px;">chevron_right</span>
        </div>
    `).join('');
    
    if(container1) container1.innerHTML = html || '<p class="text-sm text-gray">Bạn chưa có voucher</p>';
    if(container2) container2.innerHTML = html || '<p class="text-sm text-gray text-center mt-4">Không có voucher</p>';
}

function selectVoucher(idx) {
    appliedVoucher = userVouchers[idx];
    document.getElementById('co-voucherName').innerText = appliedVoucher.name;
    closeOverlay('voucher-select');
    renderCart();
}

function showTiers() { 
    renderTier('silver');
    openOverlay('tier-details'); 
}

function renderTier(level) {
    const tabs = document.querySelectorAll('.tier-tab');
    tabs.forEach(t => {
        t.classList.remove('active');
        t.style.background = 'transparent';
        t.style.boxShadow = 'none';
        t.style.color = 'var(--text-muted)';
    });
    
    // Find the correct tab
    let idx = 0;
    if(level === 'silver') idx = 1;
    if(level === 'gold') idx = 2;
    const activeTab = tabs[idx];
    activeTab.classList.add('active');
    activeTab.style.background = 'white';
    activeTab.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
    activeTab.style.color = 'var(--accent)';

    const dynamicContent = document.getElementById('tier-content-dynamic');
    
    if (level === 'bronze') {
        dynamicContent.innerHTML = `
            <div class="vip-card mb-8" style="background: linear-gradient(135deg, #a67c00 0%, #bf953f 100%);">
                <p class="text-xs uppercase font-semibold mb-2 tracking-wide" style="color: rgba(255,255,255,0.8);">MEMBER - HẠNG ĐỒNG</p>
                <h2 class="text-3xl font-bold mb-8 text-white">Lê Minh Anh</h2>
                <div class="flex justify-between items-end">
                    <div>
                        <p class="text-xs mb-1 uppercase" style="color: rgba(255,255,255,0.8);">Điểm hiện tại</p>
                        <p class="text-2xl font-bold text-white">${userPoints.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <div class="card p-5">
                <h3 class="text-sm font-bold uppercase mb-4 text-accent">Đặc quyền Đồng</h3>
                <div class="flex flex-col gap-3">
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Đăng ký thành viên mới</p>
                            <p class="text-xs text-gray mt-1">Đăng ký dễ dàng qua SĐT, sở hữu thẻ tích điểm số miễn phí.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Tích luỹ 0.5 điểm / 10.000đ</p>
                            <p class="text-xs text-gray mt-1">Sử dụng điểm quy đổi Voucher giới hạn.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Quà tặng Welcome</p>
                            <p class="text-xs text-gray mt-1">Nhận Voucher giảm 10% cho đơn hàng đầu tiên (tối đa 50K).</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (level === 'silver') {
        const remaining = 1500 - userPoints > 0 ? 1500 - userPoints : 0;
        const width = Math.min(100, (userPoints / 1500) * 100);
        dynamicContent.innerHTML = `
            <div class="vip-card mb-8">
                <p class="text-xs uppercase font-semibold text-muted mb-2 tracking-wide">SILVER - HẠNG BẠC</p>
                <h2 class="text-3xl font-bold mb-8">Lê Minh Anh</h2>
                <div class="flex justify-between items-end">
                    <div>
                        <p class="text-xs text-muted mb-1 uppercase">Điểm xét hạng</p>
                        <p class="text-2xl font-bold">${userPoints.toLocaleString()}</p>
                    </div>
                </div>
            </div>

            <div class="mb-10">
                <div class="flex justify-between mb-2">
                    <span class="text-xs font-semibold uppercase text-gray">Tiến trình hạng</span>
                    <span class="text-xs font-semibold text-accent">Vàng (1,500)</span>
                </div>
                <div style="height: 6px; background: #e5e5e5; border-radius: 3px; position:relative;">
                    <div style="width: ${width}%; height: 100%; background: var(--accent); border-radius: 3px;"></div>
                    <div style="position: absolute; left: 0; top: -3px; width: 12px; height: 12px; border-radius: 50%; border: 3px solid var(--accent); background: white;"></div>
                    <div style="position: absolute; right: 0; top: -3px; width: 12px; height: 12px; border-radius: 50%; border: 3px solid ${width >= 100 ? 'var(--accent)' : '#e5e5e5'}; background: white;"></div>
                </div>
                <p class="text-center text-sm font-medium mt-4 text-gray">${remaining > 0 ? `Chỉ cần mua sắm & tích <b>${remaining} điểm</b> nữa để đạt hạng Vàng` : 'Chúc mừng! Bạn đã đủ điểm thăng lên hạng Vàng.'}</p>
            </div>

            <div class="card p-5">
                <h3 class="text-sm font-bold uppercase mb-4 text-accent">Đặc quyền Bạc</h3>
                <div class="flex flex-col gap-3">
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Tích luỹ 1 điểm / 10.000đ</p>
                            <p class="text-xs text-gray mt-1">Đổi được nhiều Voucher giá trị 50K - 100K tại cửa hàng.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Giảm 5% cho thành viên</p>
                            <p class="text-xs text-gray mt-1">Áp dụng cho mọi hóa đơn mua sắm trong năm hạng mức.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Tặng Quà Sinh Nhật</p>
                            <p class="text-xs text-gray mt-1">Nhận Voucher giảm 10% tối đa 100K cho tuần lễ sinh nhật.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Giữ hàng trong 24h</p>
                            <p class="text-xs text-gray mt-1">Đặt lịch giữ trước sản phẩm trực tuyến tại cửa hàng Routine.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (level === 'gold') {
        dynamicContent.innerHTML = `
            <div class="vip-card mb-8" style="background: linear-gradient(135deg, #FFB800 0%, #FF8A00 100%);">
                <p class="text-xs uppercase font-semibold mb-2 tracking-wide" style="color: rgba(255,255,255,0.9);">GOLD - HẠNG VÀNG</p>
                <h2 class="text-3xl font-bold mb-8 text-white">Lê Minh Anh</h2>
                <div class="flex justify-between items-end">
                    <div>
                        <p class="text-xs mb-1 uppercase" style="color: rgba(255,255,255,0.9);">Điều kiện</p>
                        <p class="text-2xl font-bold text-white">1,500 Điểm / Năm</p>
                    </div>
                </div>
            </div>
            <div class="card p-5">
                <h3 class="text-sm font-bold uppercase mb-4 text-[#FF8A00]">Đặc quyền Vàng</h3>
                <div class="flex flex-col gap-3">
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Tích luỹ tốc độ 2x</p>
                            <p class="text-xs text-gray mt-1">Nhận ngay 2 điểm cho mỗi 10.000đ. Đổi Voucher không giới hạn.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Giảm 10% đặc quyền Vàng</p>
                            <p class="text-xs text-gray mt-1">Giảm trực tiếp 10% giá trị mọi đơn hàng mua sắm.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Quà VIP Sinh Nhật</p>
                            <p class="text-xs text-gray mt-1">Giảm 20% trong tháng sinh nhật và quà tặng bất ngờ từ Routine.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Freeship Toàn Quốc</p>
                            <p class="text-xs text-gray mt-1">Miễn phí giao hàng mọi đơn, ưu tiên xử lý đóng gói hỏa tốc.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-success" style="font-size:20px; flex-shrink:0;">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">CSKH Riêng</p>
                            <p class="text-xs text-gray mt-1">Kết nối thẳng đến hotline CSKH siêu nhanh (0s chờ).</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

function openGameHub() { openOverlay('game-hub'); }

// --- STORE & BOOKING ---
function renderStores(city, el) {
    if(el) {
        document.querySelectorAll('.store-tab').forEach(t=>t.classList.remove('active'));
        el.classList.add('active');
    }
    const list = document.getElementById('store-list');
    const filtered = STORES.filter(s => city === 'Tất cả' || s.city === city);
    list.innerHTML = filtered.map(s => `
        <div class="card p-4">
            <p class="text-sm font-bold mb-1">${s.name}</p>
            <p class="text-xs text-gray mb-3">${s.address}</p>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-1 text-muted text-xs">
                    <span class="material-symbols-outlined" style="font-size: 14px;">schedule</span>
                    09:00 - 22:00
                </div>
                <button class="btn btn-outline" style="width:auto; padding: 6px 12px; font-size: 10px;" onclick="openBooking('${s.name}')">ĐẶT LỊCH</button>
            </div>
        </div>
    `).join('');
}

function openBooking(store) {
    document.getElementById('book-store-name').innerText = store;
    openOverlay('booking');
}

// --- WHEEL GAME ---
function spinWheel() {
    const w = document.getElementById('wheel');
    const b = document.getElementById('spin-btn');
    b.disabled = true; b.innerText = 'ĐANG QUAY...';
    
    // Spin animation 5-8 rounds + random
    const deg = Math.floor(Math.random() * 360) + 360 * 5;
    w.style.transform = `rotate(${deg}deg)`;
    
    setTimeout(() => {
        alert('Chúc mừng bạn quay trúng Voucher 50K!');
        userVouchers.push({ name: 'WHEEL', value: 'Giảm 50K', amount: 50000, mode: 'fixed' });
        renderVouchers();
        b.innerText = 'QUAY NGAY';
        b.disabled = false;
        w.style.transition = 'none';
        w.style.transform = `rotate(${deg % 360}deg)`;
        setTimeout(() => w.style.transition = 'transform 4s cubic-bezier(0.1, 0.9, 0.2, 1)', 50);
        closeOverlay('wheel');
        showView('loyalty');
    }, 4000);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    showView('home');
});
