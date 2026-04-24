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


// --- STATE ---
const NEWS_DATA = [
    { title: "Màu xanh cốm là màu gì? Cách phối đồ với màu xanh cốm cực trendy", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600", url: "https://routine.vn/tin-thoi-trang/mau-xanh-com-la-mau-gi", date: "08/04/2026", content: "Màu xanh cốm là một gam màu tươi mới, mang lại cảm giác trẻ trung và đầy sức sống. Bài viết này sẽ hướng dẫn bạn cách phối đồ cực chất với tông màu đang làm mưa làm gió trong cộng đồng fashionista hiện nay. Đừng bỏ lỡ những gợi ý mix & match từ dạo phố đến công sở." },

    { title: "Bespoke là gì? Tìm hiểu về nghệ thuật may đo Bespoke đẳng cấp", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600", url: "https://routine.vn/tin-thoi-trang/bespoke-la-gi", date: "05/04/2026", content: "Bespoke không chỉ là may đo, đó là một tác phẩm nghệ thuật cá nhân hóa hoàn toàn cho chủ nhân. Từ việc lựa chọn chất liệu vải cao cấp đến việc tinh chỉnh từng đường kim mũi chỉ, Bespoke đem lại sự vừa vặn hoàn hảo mà không một bộ đồ may sẵn nào có được." },
    { title: "PGA là gì trong golf? Những quy định trang phục golf chuẩn mực", img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=600", url: "https://routine.vn/tin-thoi-trang/pga-la-gi", date: "01/04/2026", content: "Tìm hiểu về tiêu chuẩn PGA và cách lựa chọn trang phục golf sao cho thật phong cách và chuyên nghiệp trên sân cỏ. Routine sẽ giới thiệu đến bạn những mẫu áo polo và quần khaki chuyên dụng, giúp bạn tự tin trong từng cú swing mà vẫn giữ được vẻ lịch lãm." },
    { title: "Vải da cá là gì? Ưu điểm và ứng dụng của vải da cá trong thời trang", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600", url: "https://routine.vn/tin-thoi-trang/vai-da-ca-la-gi", date: "28/03/2026", content: "Vải da cá (French Terry) là loại vải có cấu trúc đặc biệt với một mặt mịn và một mặt có các vòng lặp như vảy cá. Đây là chất liệu lý tưởng cho các dòng áo hoodie, sweater và quần jogger nhờ khả năng giữ ấm và thấm hút tốt." },
    { title: "Tuyên ngôn phong cách với Simplicity & Comfort", img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=600", url: "https://routine.vn/tin-thoi-trang/su-toi-gian-tro-thanh-tuyen-ngon-phong-cach-voi-simplicity-comfort", date: "25/03/2026", content: "Sự tối giản trở thành tuyên ngôn phong cách mạnh mẽ nhất. BST Simplicity & Comfort tập trung vào trải nghiệm người mặc với chất liệu cao cấp và form dáng tinh tế, giúp bạn luôn tự tin và thoải mái trong mọi hoạt động." },
    { title: "Cách bảo quản áo thun cotton luôn bền đẹp như mới", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600", url: "#", date: "20/03/2026", content: "Bí quyết giặt và phơi áo thun cotton để không bị giãn và phai màu sau nhiều lần sử dụng. Hiểu rõ về cấu trúc sợi vải sẽ giúp bạn chăm sóc trang phục tốt hơn, tiết kiệm chi phí và luôn có những bộ đồ tươm tất khi bước xuống phố." },
    { title: "Top 5 item không thể thiếu trong tủ đồ mùa hè", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=600", url: "#", date: "15/03/2026", content: "Từ áo sơ mi linen đến quần short khaki, hãy chuẩn bị ngay những item 'must-have' để vượt qua mùa hè một cách phong cách nhất cùng Routine." },
    { title: "Top 5 phụ kiện không thể thiếu cho set đồ công sở nam", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=600", url: "#", date: "10/03/2026", content: "Thắt lưng, đồng hồ, tất và những món phụ kiện tinh tế giúp nâng tầm diện mạo chuyên nghiệp cho phái mạnh. Đôi khi chỉ một chi tiết nhỏ cũng đủ để tạo nên sự khác biệt hoàn toàn cho bộ suit hay chiếc áo sơ mi quen thuộc của bạn." },
    { title: "Chất liệu Linen: Sự lựa chọn hoàn hảo cho mùa hè oi bức", img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=600", url: "#", date: "05/03/2026", content: "Linen với khả năng thấm hút mồ hôi tuyệt vời là người bạn đồng hành không thể thiếu trong những ngày nắng nóng. Cùng Routine khám phá những ưu điểm vượt trội của sợi lanh tự nhiên và cách ứng dụng chúng vào thời trang hàng ngày." },
    { title: "Phong cách Minimalism: Less is More", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600", url: "#", date: "01/03/2026", content: "Tối giản không có nghĩa là đơn điệu. Tìm hiểu cách xây dựng tủ đồ Capsule với phong cách Minimalism đặc trưng của Routine, đem lại sự thanh lịch vượt thời gian." }
];

// --- STATE ---

let currentCart = [];
let currentProduct = null;
let userPoints = 1250;




const STORE_DATA = [
    // HÀ NỘI
    { id: 1, name: 'Routine Nguyễn Trãi', address: '74 Nguyễn Trãi, Q. Thanh Xuân, Hà Nội', city: 'hanoi', phone: '024 6686 9931' },
    { id: 2, name: 'Routine Chùa Bộc', address: '101 Chùa Bộc, Q. Đống Đa, Hà Nội', city: 'hanoi', phone: '024 6686 9932' },
    { id: 3, name: 'Routine Phạm Ngọc Thạch', address: '121 Phạm Ngọc Thạch, Đống Đa, Hà Nội', city: 'hanoi', phone: '024 6686 9933' },
    { id: 4, name: 'Routine Cầu Giấy', address: '234 Cầu Giấy, Q. Cầu Giấy, Hà Nội', city: 'hanoi', phone: '024 6686 9934' },
    { id: 5, name: 'Routine Hàng Bạc', address: '63 Hàng Bạc, Q. Hoàn Kiếm, Hà Nội', city: 'hanoi', phone: '024 6686 9935' },

    // TP HCM
    { id: 6, name: 'Routine Sư Vạn Hạnh', address: 'Tầng 2, Vạn Hạnh Mall, Q. 10, TP. HCM', city: 'hcm', phone: '028 6686 9941' },
    { id: 7, name: 'Routine Cách Mạng Tháng 8', address: '555 CMT8, Phường 15, Q. 10, TP. HCM', city: 'hcm', phone: '028 6686 9942' },
    { id: 8, name: 'Routine Nguyễn Trãi (Q.1)', address: '150 Nguyễn Trãi, P. Bến Thành, Quận 1, TP. HCM', city: 'hcm', phone: '028 6686 9943' },
    { id: 9, name: 'Routine Quang Trung', address: '456 Quang Trung, P. 10, Q. Gò Vấp, TP. HCM', city: 'hcm', phone: '028 6686 9944' },
    { id: 10, name: 'Routine Lê Văn Sỹ', address: '242 Lê Văn Sỹ, P. 1, Q. Tân Bình, TP. HCM', city: 'hcm', phone: '028 6686 9945' },

    // ĐÀ NẴNG
    { id: 11, name: 'Routine Lê Duẩn', address: '123 Lê Duẩn, Q. Hải Châu, Đà Nẵng', city: 'danang', phone: '0236 668 6991' },
    { id: 12, name: 'Routine Điện Biên Phủ', address: '345 Điện Biên Phủ, Q. Thanh Khê, Đà Nẵng', city: 'danang', phone: '0236 668 6992' },

    // OTHER
    { id: 13, name: 'Routine Aeon Mall Hải Phòng', address: 'Aeon Mall Lê Chân, Hải Phòng', city: 'other', phone: '0225 668 6991' },
    { id: 14, name: 'Routine Aeon Mall Bình Dương', address: 'Thuận An, Bình Dương', city: 'other', phone: '0274 668 6991' }
];


let currentCityFilter = 'hanoi';
let storeSearchQuery = '';

function renderStores() {
    const listEl = document.getElementById('stores-list');
    if (!listEl) {
        console.error('stores-list element not found');
        return;
    }

    const filtered = STORE_DATA.filter(s => {
        const matchCity = currentCityFilter === 'all' || s.city === currentCityFilter;
        const matchSearch = s.name.toLowerCase().includes(storeSearchQuery.toLowerCase()) ||
            s.address.toLowerCase().includes(storeSearchQuery.toLowerCase());
        return matchCity && matchSearch;
    });

    listEl.innerHTML = filtered.map(s => `
        <div class="card p-4 flex justify-between items-center cursor-pointer active:bg-gray-50 mb-1" onclick="focusStore(${s.id})">
            <div>
                <h4 class="font-bold text-sm">${s.name}</h4>
                <p class="text-[10px] text-gray mt-1 leading-tight">${s.address}</p>
                <div class="flex items-center gap-2 mt-2">
                    <span class="material-symbols-outlined text-xs text-muted" style="font-size: 14px;">call</span>
                    <span class="text-[10px] text-muted">${s.phone}</span>
                </div>
            </div>
            <span class="material-symbols-outlined text-muted" style="font-size: 18px;">chevron_right</span>
        </div>
    `).join('') || '<p class="text-xs text-muted text-center py-8">Không tìm thấy cửa hàng nào tại khu vực này.</p>';
}

function filterStores(val) {
    storeSearchQuery = val;
    renderStores();
}

function switchCity(city) {
    currentCityFilter = city;
    const tabs = document.querySelectorAll('#city-tabs .tab');
    tabs.forEach(t => t.classList.remove('active'));

    // Ensure the clicked tab gets active class
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    renderStores();
}

function openStores() {
    openOverlay('store-search');
    setTimeout(renderStores, 50); // Small delay to ensure DOM is ready
}

function focusStore(id) {
    // Simulating moving the map to the store
    alert('Đang hiển thị vị trí: ' + STORE_DATA.find(s => s.id === id).name);
}


const ORDER_DATA = [
    { id: 'ORD00123', date: '01/04/2026', total: 1250000, status: 'Hoàn thành', items: 3 },
    { id: 'ORD00145', date: '25/03/2026', total: 790000, status: 'Hoàn thành', items: 1 },
    { id: 'ORD00167', date: '10/03/2026', total: 2450000, status: 'Hoàn thành', items: 5 }
];

function renderOrders() {
    const list = document.getElementById('orders-list-container');
    if (!list) return;

    list.innerHTML = ORDER_DATA.map(order => `
        <div class="card p-4 mb-3 border-l-4 border-success">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <p class="text-[10px] text-muted font-bold uppercase tracking-wider">${order.id}</p>
                    <p class="text-xs text-gray mt-1">${order.date}</p>
                </div>
                <span class="badge bg-success-light text-success" style="font-size: 9px; padding: 4px 8px; border-radius: 4px;">${order.status}</span>
            </div>
            <div class="flex justify-between items-end mt-4 pt-3 border-t border-gray-50">
                <p class="text-[10px] text-gray">${order.items} sản phẩm</p>
                <p class="font-bold text-sm">${order.total.toLocaleString()}đ</p>
            </div>
        </div>
    `).join('') || '<p class="text-center text-muted py-8 text-xs">Bạn chưa có đơn hàng nào.</p>';
}

function openOrders() {
    openOverlay('orders');
    renderOrders();
}

function openProfile() {
    openOverlay('profile');
}

const REDEEMABLE_VOUCHERS = [
    { id: 'v100', name: 'Voucher 100K', value: 'Giảm 100K', cost: 1000, amount: 100000, mode: 'fixed', hsd: '31/12/2026', qty: 45, conditions: 'Áp dụng cho hóa đơn từ 1.000K tại toàn bộ hệ thống cửa hàng Routine và Online.' },
    { id: 'v200', name: 'Voucher 200K', value: 'Giảm 200K', cost: 1800, amount: 200000, mode: 'fixed', hsd: '31/12/2026', qty: 28, conditions: 'Áp dụng cho hóa đơn từ 2.000K tại toàn bộ hệ thống cửa hàng Routine và Online.' }
];





const GIFT_DATA = [
    { id: 'g1', name: 'Tất Cotton cao cấp', img: 'data:image/webp;base64,UklGRkAEAABXRUJQVlA4IDQEAAAQJACdASq3AK4APoE+mEklJqghKBk5oQAQCWdu3r4aZHyAJuLXHZ1QxRCfdnEaeXxt5SC5c0y3pcd7EtCulCCXQAAWRbidAtRnzBRSBZSDdCj8yIIAqZbzLsjxgbp8/9e1cPICiIjwmyNdn4zuFDvHwt2k04L4V+hHUpCCLtnxo8Kfo81dm+PgCKPSr2570RAH/qxWBqDBt5OZWcSHlqpbxYgJZHBCxIuCZ8dbvqy11l+5RfW4VeJQAwPXfII+sLhkv6JBzsag7L9rHGG3toO+egtvTeI8qkU8DKmCnbBeTZ61S4CD3gMWTkiiyqPI6K6lntUG6MuV1qgpgd9PwwJ+gEp9N6vweX2m9iWElUTMxxMaGXpu4M8UUjrbDdpD7wL4hQNmmq3uyBgA/vcrF8Iijs7UXfp0zGht0LCQW1+hE+ikkakrZ0sXFAy6hbu6oap0QVZh2gAklitOhouW9nRwhQ74IfraXnhW8bPP1OZa/UgrGg30LydKYJNyatG6WG027XnkDaB85DPiQLrgG/g5t6BksmTvqOD9G3M5qIrWxNMCNlYNIyAZZeymzBZbpfbj48eiADCgBCcFp1ywxyhJIATfdtj9ZULZfJXwiFEnxFBKgI6NdOfJTZK+GEtkoAWfvJDp4dPDKACVg7KcmPTThfp4FOdsnMlIKtguRE4yrVfweaoQQYqd5+zjxwg8qEAOSNXZOVdlmYKc7Arb/rjueiJzRm/abMLgRIIfxYrX1g2J5XoQlEOlckUihLEe9KMpfWho1keWWqVG8I64jA+Q79EHMaCC3rS8kMGubzFm9mC9XWxun4UTIc1YLQC4vxOjapeVRkBK3q/rbMr2Mv0V8oJ4uierGs9eeixVhvv4ObyydSJ6Y6MKVBa52xEArlmKFBtlMLs5S8Bzyz55oISUYT54jC68sW9Uvn7k2Dvsz6/JikeF6f+yclbTqfFBrW/PCbG+YpDeKUrc2CpNR3LKcQ+bvN71EH8f0HftpTOe5gLYav4CYxYD59BTv0Ip2S/fTRphJrNTV/6wauockyafbO/smq/3DUmGVjiORrcB4yqBikifM93qVr9QEq5BosaQLNtg4IJzHlNufegET1n+Ti6HsYpm3ERuysGLZ2sjcWWZ0sPbn9v0L7eqE2ZX0mjfvqgySoJT8cjgb3AYPWJQKsAXedQiZgKYrZNrmBa2RrhhPmWvJpYeGfjK+knOCDIvlVbP2MtfrM7M0AoPD6CBqfYka6r1HNEVAZmE5Yy5xgzsHTiLAtCcSyC31JZDMz4C6/V62aL45P3va0Vv+7oVR2uc2a2t/wH1mFD10CP3CpVwFSb5N/yhOIWooohLrvUfWaNDkZt6epwt0x9amk7rE+0zu8l4g2HEORRGs3qSGD9S852V7O2oCcBcYPjXKSy4pYDff4wLuYfGHoOW2c3TGgAAAA==', hsd: 'Không thời hạn', conditions: 'Đổi bằng 200 điểm hoặc áp dụng cho hóa đơn từ 599.000đ.' },
    { id: 'g2', name: 'Bình nước cầm tay', img: 'data:image/webp;base64,UklGRiwCAABXRUJQVlA4ICACAABQEQCdASqUAJQAPoFAnUqlJCMhofgJCKAQCWdu4XB50F5HbZwGelzbAc8IAih3n2jqxtvDniSdgoI8gMTpoATEbM8YdLIKC9OL+6rdC64ytoprdV8AoJ5qJaYerVwu1wUEwJlYIj9HdMkdKYH93vjjPnPyRp2wTBQT/YVNzPG5UFDHF9FYFIWDqyFrDvPtHVj7CAAA/v7EWA0badnWWdBVYEffz0oWrGYNyEYTLCMFjmS6Uqv1mHOCcEMs13rKSgXSGgWknAaZZDtymlvap9N7MnMLxguAJeQQ+xYDtLu20JhFIp9OxPp/be6fV7Zq5/dm/w37Y6k5sq3q6btxwRxXkdO/8k0TyMZd+lzDlHjm2aTb1ajSUaW+rKScyp57FigI1FgPhxs5fFo7BGcB3fYgKYBrxahz74i8hJ8oVIiz84uv8WX/IBJxyhDele7XIK0FFGGwdyEJB+AiSyFILL2ysZg3L+/UKxsMZDy3k7ZQQCisxi/OHfWwLOjdpkCsQmyKcYTc8PX9UGhEomHHC++j8EAvCecxZfTstqgIL3/Te5UkbMr3AYV4ljAGHdDrMF0OBhyAMQlUP/QReeWYesGIVXvwnKRUCG1/2WLl0MK9EWqiw1GOCsMT5NdaHWncOlxUzsJVF/JxV8KsN+hIpARA+V7ky1JpEl2aKYT+szfQa3GILZDHzjuv+N8O+OBNmbfBiUNLTNh7jnLKB14AAAAA', hsd: '2 tháng kể từ ngày nhận', conditions: 'Đổi bằng 500 điểm hoặc áp dụng cho hóa đơn từ 999.000đ.' },
    { id: 'g3', name: 'Túi Tote vải Canvas', img: 'data:image/webp;base64,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', hsd: 'Không thời hạn', conditions: 'Áp dụng cho hóa đơn từ 799.000đ hoặc đổi bằng 350 điểm.' },
    { id: 'g4', name: 'Mũ lưỡi trai Routine', img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT98te05hBvuA8FI28SaP98h9lB04Q8y4mdTapFSM7in22zaRSYKOsbrzbaY7Mi8_GiLF_OkpZObiZ5rI7pjKRSeDppFPdomAbq4uvlWeREVFLBpmW5Yhs8rKcFsMjtR6WyNbBD4Rk&usqp=CAc', hsd: 'Không thời hạn', conditions: 'Đổi bằng 400 điểm hoặc áp dụng cho hóa đơn từ 899.000đ.' }
];

let userVouchers = [
    { name: 'WELCOME', value: 'Giảm 10%', amount: 0.1, mode: 'percent', hsd: '31/12/2026', status: 'Chưa sử dụng', conditions: 'Áp dụng cho đơn hàng đầu tiên.' }
];

let userVoucherHistory = [
    { name: 'Voucher 50K', date: '01/03/2026', status: 'Đã sử dụng' },
    { name: 'Voucher 10%', date: '15/02/2026', status: 'Hết hạn' },
    { name: 'Voucher 20K', date: '10/01/2026', status: 'Đã sử dụng' },
    { name: 'Voucher 100K', date: '05/01/2026', status: 'Đã sử dụng' },
    { name: 'Voucher FreeShip', date: '01/01/2026', status: 'Hết hạn' }
];

let userGifts = [
    { name: 'Tất Cotton cao cấp', hsd: 'Không thời hạn', status: 'Chưa nhận' }
];

let appliedVoucher = null;

// --- NAVIGATION ---
const views = ['home', 'shop', 'membership', 'offers', 'account'];


function showView(viewId) {
    console.log('Attempting to show view:', viewId);
    views.forEach(v => {
        const el = document.getElementById(`view-${v}`);
        if (el) {
            if (v === viewId) el.classList.remove('hidden');
            else el.classList.add('hidden');
        }
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(viewId)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewId === 'home') renderHome();
    if (viewId === 'shop') renderShop('nam');
    if (viewId === 'offers') {
        renderVouchers();
        renderGifts();
    }
    if (viewId === 'membership') renderHomePoints();

    updateFloatingCart();
}


function renderVouchers() {
    const userVouchersEl = document.getElementById('user-vouchers');
    const redeemableVouchersEl = document.getElementById('redeemable-vouchers');
    if (userVouchersEl) {
        userVouchersEl.innerHTML = userVouchers.map(v => `
            <div class="card p-3 flex justify-between items-center mb-3">
                <div class="flex items-center gap-3">
                    <div style="width: 44px; height: 44px; background: #f8f9fa; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <span class="material-symbols-outlined" style="color: var(--accent);">confirmation_number</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-sm">${v.name}</h4>
                        <p class="text-[10px] text-muted">${v.value || 'Giảm giá'}</p>
                    </div>
                </div>
                <button class="btn" style="width: 80px !important; height: 32px !important; min-width: 0 !important; font-size: 10px !important; padding: 0 !important; border-radius: 16px !important;" onclick="showView('shop')">SỬ DỤNG</button>
            </div>
        `).join('');
    }

    if (redeemableVouchersEl) {

        redeemableVouchersEl.innerHTML = REDEEMABLE_VOUCHERS.map(v => `
            <div class="card p-3 flex justify-between items-center mb-3" onclick="openVoucherDetail('${v.id}')">
                <div class="flex items-center gap-3">
                    <div style="width: 44px; height: 44px; background: #fffcf0; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 1px solid #ffeeba;">
                        <span class="material-symbols-outlined" style="color: #d4a017;">stars</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-sm">${v.name}</h4>
                        <p class="text-[10px] text-accent font-bold">${v.cost} điểm</p>
                    </div>
                </div>
                <button class="btn" style="width: 80px !important; height: 32px !important; min-width: 0 !important; font-size: 10px !important; padding: 0 !important; border-radius: 16px !important; background: #000 !important;" onclick="event.stopPropagation(); redeemVoucher('${v.id}')">ĐỔI</button>
            </div>
        `).join('');
    }
}





function renderGifts() {
    console.log('Rendering gifts...');
    const availableGiftsEl = document.getElementById('available-gifts');

    if (availableGiftsEl) {
        availableGiftsEl.innerHTML = GIFT_DATA.map(g => `
            <div class="card p-3 flex justify-between items-center mb-3">
                <div class="flex items-center gap-3">
                    <div style="width: 60px; height: 60px; flex-shrink: 0; background: #f8f9fa; border-radius: 8px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <img src="${g.img}" style="width:100%; height:100%; object-fit:cover;">
                    </div>
                    <div>
                        <h4 class="font-bold text-xs">${g.name}</h4>
                    </div>
                </div>
                <button class="btn" style="width: 80px !important; height: 32px !important; min-width: 0 !important; font-size: 10px !important; padding: 0 !important; border-radius: 16px !important;" onclick="openGiftDetail('${g.id}')">NHẬN QUÀ</button>
            </div>
        `).join('');
    }
}


function openVoucherDetail(id) {
    const v = REDEEMABLE_VOUCHERS.find(x => x.id === id);
    if (!v) return;

    document.getElementById('vd-name').innerText = v.name;
    document.getElementById('vd-cost').innerText = v.cost + " ĐIỂM";
    document.getElementById('vd-hsd').innerText = v.hsd;
    document.getElementById('vd-qty').innerText = v.qty + " voucher";
    document.getElementById('vd-conditions').innerText = v.conditions;

    document.getElementById('vd-action').innerHTML = `
        <button class="btn w-full" style="height: 48px !important; background: #000 !important;" onclick="closeOverlay('voucher-detail'); redeemVoucher('${v.id}')">ĐỔI VOUCHER NGAY</button>
    `;

    openOverlay('voucher-detail');
}

function openGiftDetail(id) {
    const gift = GIFT_DATA.find(x => x.id === id);
    if (!gift) return;
    document.getElementById('gift-content-title').innerText = gift.name;
    document.getElementById('gift-content-img').src = gift.img;
    document.getElementById('gift-content-conditions').innerText = gift.conditions;
    document.getElementById('gift-detail-action').innerHTML = `
        <button class="btn" onclick="confirmRedeemGift('${gift.id}')">XÁC NHẬN NHẬN QUÀ</button>
    `;
    openOverlay('gift-detail');
}

function confirmRedeemGift(id) {
    const g = GIFT_DATA.find(x => x.id === id);
    if (!g) return;
    userGifts.push({ name: g.name, hsd: g.hsd, status: 'Chưa nhận' });
    renderGifts();
    closeOverlay('gift-detail');
    document.getElementById('redeem-success-msg').innerText = `Bạn đã nhận quà ${g.name} thành công. Vui lòng kiểm tra trong kho quà tặng!`;
    openOverlay('redeem-success');
}

function redeemVoucher(id) {
    const v = REDEEMABLE_VOUCHERS.find(x => x.id === id);
    if (!v) return;
    if (userPoints < v.cost) return alert('Không đủ điểm!');
    if (confirm(`Đổi ${v.cost} điểm lấy ${v.name}?`)) {
        userPoints -= v.cost;
        userVouchers.push({ ...v, status: 'Chưa sử dụng' });
        renderVouchers();
        renderHomePoints();
        document.getElementById('redeem-success-msg').innerText = `Bạn đã đổi ${v.name} thành công. Hãy tiếp tục mua sắm cùng Routine nhé!`;
        openOverlay('redeem-success');
    }
}

function redeemGift(id) {
    const g = GIFT_DATA.find(x => x.id === id);
    if (!g) return;
    if (confirm(`Nhận quà: ${g.name}?`)) {
        userGifts.push({ name: g.name, hsd: g.hsd, status: 'Chưa nhận' });
        renderGifts();
        document.getElementById('redeem-success-msg').innerText = `Bạn đã nhận quà ${g.name} thành công. Vui lòng kiểm tra trong kho quà tặng!`;
        openOverlay('redeem-success');
    }
}

function openVoucherHistory() {
    const list = document.getElementById('history-voucher-list');
    if (list) {
        list.innerHTML = userVoucherHistory.map(h => `
            <div class="card p-3 flex justify-between items-center opacity-70">
                <div>
                    <p class="font-bold text-sm">${h.name}</p>
                    <p class="text-[10px] text-gray">${h.date}</p>
                </div>
                <span class="text-[10px] font-bold">${h.status}</span>
            </div>
        `).join('');
    }
    openOverlay('history-voucher');
}

function openGiftHistory() {
    const list = document.getElementById('history-gift-list');
    if (list) {
        // Mock 5 items
        const hist = [
            { name: 'Túi vải Canvas', date: '01/01/2026', status: 'Đã nhận' },
            { name: 'Khẩu trang vải', date: '20/12/2025', status: 'Đã nhận' },
            { name: 'Mũ bảo hiểm', date: '15/11/2025', status: 'Đã nhận' },
            { name: 'Móc khóa', date: '01/11/2025', status: 'Đã nhận' },
            { name: 'Lót chuột', date: '20/10/2025', status: 'Đã nhận' }
        ];
        list.innerHTML = hist.map(h => `
            <div class="card p-3 flex justify-between items-center opacity-70">
                <div>
                    <p class="font-bold text-sm">${h.name}</p>
                    <p class="text-[10px] text-gray">${h.date}</p>
                </div>
                <span class="text-[10px] font-bold">${h.status}</span>
            </div>
        `).join('');
    }
    openOverlay('history-gift');
}

function openOverlay(id) {
    console.log('Opening overlay:', id);
    const el = document.getElementById(`overlay-${id}`);
    if (el) {
        el.classList.remove('hidden');
        el.style.display = 'flex';
        console.log('Overlay opened:', id);
    } else {
        console.error('Could not find overlay:', `overlay-${id}`);
    }
}

function closeOverlay(id) {
    const el = document.getElementById(`overlay-${id}`);
    if (el) {
        el.classList.add('hidden');
        el.style.display = 'none';
    }
}

function closeAllOverlays() {
    document.querySelectorAll('.overlay-view').forEach(el => {
        el.classList.add('hidden');
        el.style.display = 'none';
    });
}

// --- RENDER SHOP ---

function renderHome() {
    const featured = [...PRODUCTS.nam.slice(0, 2), ...PRODUCTS.nu.slice(0, 2)];
    document.getElementById('home-featured-products').innerHTML = featured.map(p => createHTMLCard(p)).join('');
    renderNewsSlider();
}

function renderNewsSlider() {
    const slider = document.getElementById('news-slider');
    if (!slider) return;
    slider.innerHTML = NEWS_DATA.map((item, idx) => `
        <div class="news-card" onclick="viewNews(${idx})">
            <div class="news-img-wrapper">
                <img src="${item.img}" alt="${item.title}">
                <div class="news-overlay"></div>
                <div class="news-content">
                    <p class="news-card-title">${item.title}</p>
                    <div class="news-date">
                        <span class="material-symbols-outlined" style="font-size: 14px;">schedule</span>
                        <span>${item.date}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function viewNews(idx) {
    const item = NEWS_DATA[idx];
    if (!item) return;
    document.getElementById('news-content-title').innerText = item.title;
    document.getElementById('news-content-date').innerText = item.date;
    document.getElementById('news-content-img').src = item.img;
    document.getElementById('news-content-body').innerText = item.content;
    openOverlay('news-detail');
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
    const unique = all.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
    const filtered = unique.filter(p => p.name.toLowerCase().includes(q));

    if (filtered.length === 0) {
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
    if (!currentProduct) return;

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

// --- CART & PURCHASE ---
function addToCart() {
    if (!currentProduct) return;
    const existing = currentCart.find(i => i.id === currentProduct.id);
    if (existing) {
        existing.qty++;
    } else {
        currentCart.push({ ...currentProduct, qty: 1 });
    }
    closeOverlay('product-detail');
    updateFloatingCart();
    renderCart();
    // Silent add - just show a toast or alert
    alert('Đã thêm sản phẩm vào giỏ hàng!');
}

function buyNow() {
    if (!currentProduct) return;
    const existing = currentCart.find(i => i.id === currentProduct.id);
    if (existing) {
        existing.qty++;
    } else {
        currentCart.push({ ...currentProduct, qty: 1 });
    }
    closeOverlay('product-detail');
    updateFloatingCart();
    renderCart();
    openOverlay('cart');
}

function renderCart() {
    const container = document.getElementById('cart-items');
    if (currentCart.length === 0) {
        container.innerHTML = '<div class="flex-1 flex flex-col items-center justify-center text-gray py-20"><span class="material-symbols-outlined text-4xl mb-2 opacity-20">shopping_cart_off</span>Giỏ hàng trống</div>';
        updateTotals(0);
        return;
    }

    container.innerHTML = currentCart.map((item, idx) => `
        <div class="cart-item bg-white p-3 rounded-xl mb-3 flex gap-3 shadow-sm border border-gray-50 border-r-0 border-l-0">
            <img src="${item.img}" style="width:70px; height:90px; border-radius:8px; object-fit:cover;">
            <div class="flex flex-col justify-between flex-1 py-1">
                <div>
                    <p class="text-sm font-bold text-accent">${item.name}</p>
                    <p class="text-xs text-gray mt-1">${item.price.toLocaleString()}đ</p>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                        <div class="cart-qty-btn w-6 h-6 flex items-center justify-center text-xs font-bold" onclick="updateQty(${idx}, -1)">-</div>
                        <span class="text-xs font-bold">${item.qty}</span>
                        <div class="cart-qty-btn w-6 h-6 flex items-center justify-center text-xs font-bold" onclick="updateQty(${idx}, 1)">+</div>
                    </div>
                    <span class="material-symbols-outlined text-gray-300 cursor-pointer text-base" onclick="removeItem(${idx})">delete</span>
                </div>
            </div>
        </div>
    `).join('');

    const subtotal = currentCart.reduce((sum, it) => sum + (it.price * it.qty), 0);
    updateTotals(subtotal);
}

function renderCheckoutProducts() {
    const container = document.getElementById('checkout-product-list');
    if (!container) return;

    container.innerHTML = currentCart.map(item => `
        <div class="flex gap-3 mb-4 last:mb-0">
            <img src="${item.img}" style="width:50px; height:65px; border-radius:4px; object-fit:cover;">
            <div class="flex-1">
                <p class="text-xs font-bold">${item.name}</p>
                <div class="flex justify-between mt-2">
                    <p class="text-[10px] text-gray">${item.price.toLocaleString()}đ</p>
                    <p class="text-[10px] font-bold">x${item.qty}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function openCheckout() {
    if (currentCart.length === 0) return alert('Giỏ hàng trống!');
    appliedVoucher = null;
    document.getElementById('co-voucherName').innerText = 'Chọn ưu đãi';
    renderCheckoutProducts();
    const subtotal = currentCart.reduce((sum, it) => sum + (it.price * it.qty), 0);
    updateTotals(subtotal);
    openOverlay('checkout');
}


function updateQty(idx, d) {
    currentCart[idx].qty += d;
    if (currentCart[idx].qty < 1) currentCart[idx].qty = 1;
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
        if (appliedVoucher.mode === 'percent') {
            discount = subTotal * appliedVoucher.amount;
        } else {
            discount = appliedVoucher.amount;
        }
    }
    if (discount > subTotal) discount = subTotal;

    const final = subTotal - discount;

    const ct = document.getElementById('cart-total');
    if (ct) ct.innerText = final.toLocaleString() + 'đ';

    const csub = document.getElementById('co-subtotal');
    if (csub) csub.innerText = subTotal.toLocaleString() + 'đ';

    const cdis = document.getElementById('co-discount');
    if (cdis) cdis.innerText = '-' + discount.toLocaleString() + 'đ';

    const cfin = document.getElementById('co-final');
    if (cfin) cfin.innerText = final.toLocaleString() + 'đ';
}

function updateFloatingCart() {
    const fcart = document.getElementById('floating-cart');
    const badge = document.getElementById('cart-badge');
    if (!fcart || !badge) return;

    if (currentCart.length > 0) {
        fcart.style.display = 'flex';
        const t = currentCart.reduce((sum, item) => sum + item.qty, 0);
        badge.innerText = t;
    } else {
        fcart.style.display = 'none';
    }
}

function placeOrder() {
    if (currentCart.length === 0) return alert('Giỏ hàng trống!');
    
    // Calculate final value for points
    const subtotal = currentCart.reduce((sum, it) => sum + (it.price * it.qty), 0);
    let discount = 0;
    if (appliedVoucher) {
        if (appliedVoucher.mode === 'percent') discount = subtotal * appliedVoucher.amount;
        else discount = appliedVoucher.amount;
    }
    if (discount > subtotal) discount = subtotal;
    const finalAmt = subtotal - discount;
    
    // 10K = 10 points => 1K = 1 point
    const pointsEarned = Math.floor(finalAmt / 1000);
    userPoints += pointsEarned;
    
    const ptEl = document.getElementById('home-points');
    const membEl = document.getElementById('membership-points');
    if (ptEl) ptEl.innerText = userPoints.toLocaleString();
    if (membEl) membEl.innerText = userPoints.toLocaleString();
    
    const epEl = document.getElementById('order-earned-points');
    if (epEl) epEl.innerText = pointsEarned.toLocaleString();

    currentCart = [];
    appliedVoucher = null;
    updateFloatingCart();
    closeAllOverlays();

    openOverlay('order-success');
}

// --- VOUCHERS ---
function redeemVoucher(val) {
    const cost = val === 50 ? 500 : 900;
    if (userPoints < cost) return alert('Không đủ điểm!');
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

    if (container1) container1.innerHTML = html || '<p class="text-sm text-gray">Bạn chưa có voucher</p>';
    if (container2) container2.innerHTML = html || '<p class="text-sm text-gray text-center mt-4">Không có voucher</p>';
}

function selectVoucher(idx) {
    appliedVoucher = userVouchers[idx];
    document.getElementById('co-voucherName').innerText = appliedVoucher.name;
    closeOverlay('voucher-select');
    renderCart();
}

function showTiers() {
    renderTier('MEMBER');
    openOverlay('tier-details');
}


function renderTier(level) {
    const tabs = document.querySelectorAll('.tier-tab');
    tabs.forEach(t => {
        t.classList.remove('active');
        t.style.background = 'transparent';
        t.style.color = 'var(--text-muted)';
    });

    let idx = 0;
    let cardClass = 'tier-member';
    let badgeText = 'M';
    if (level === 'SILVER') { idx = 1; cardClass = 'tier-silver'; badgeText = 'S'; }
    if (level === 'GOLD') { idx = 2; cardClass = 'tier-gold'; badgeText = 'G'; }
    if (level === 'DIAMOND') { idx = 3; cardClass = 'tier-diamond'; badgeText = 'D'; }

    if (tabs[idx]) {
        tabs[idx].classList.add('active');
        tabs[idx].style.background = 'white';
        tabs[idx].style.color = 'var(--accent)';
    }

    const dynamicContent = document.getElementById('tier-content-dynamic');

    let contentHtml = '';
    if (level === 'MEMBER') {
        contentHtml = `
            <div class="tier-card tier-member">
                <div class="tier-badge">M</div>
                <p class="text-xs uppercase font-bold opacity-70">Membership</p>
                <h2>Member</h2>
                <p class="mt-4 text-sm opacity-80">Quyền lợi cơ bản dành cho thành viên mới đăng ký.</p>
            </div>
            <div class="card p-5">
                <h3 class="text-sm font-bold uppercase mb-4 text-accent">Quyền lợi thành viên</h3>
                <ul class="flex flex-col gap-4">
                    <li class="flex gap-3 items-start">
                        <span class="material-symbols-outlined text-success">check_circle</span>
                        <p class="text-sm">Giảm 20% ưu đãi sinh nhật</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <span class="material-symbols-outlined text-success">check_circle</span>
                        <p class="text-sm">Nhận ưu đãi 20% áp dụng 01 hóa dơn mua sắm trong tháng sinh nhật</p>
                    </li>
                </ul>
            </div>`;
    } else if (level === 'SILVER') {
        contentHtml = `
            <div class="tier-card tier-silver">
                <div class="tier-badge">S</div>
                <p class="text-xs uppercase font-bold opacity-70">Membership</p>
                <h2>Silver</h2>
                <p class="mt-4 text-sm opacity-80">Hạng mức dành cho khách hàng thân thiết Bạc.</p>
            </div>
            <div class="card p-5">
                <h3 class="text-sm font-bold uppercase mb-4 text-accent">Quyền lợi thành viên</h3>
                <ul class="flex flex-col gap-4">
                    <li class="flex gap-3 items-start">
                        <span class="material-symbols-outlined text-success">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Giảm 5% cho thàng viên</p>
                            <p class="text-xs text-gray mt-1">(Áp dụng cho hóa đơn mua sắm trong năm hạng mức)</p>
                        </div>
                    </li>
                    <li class="flex gap-3 items-start">
                        <span class="material-symbols-outlined text-success">check_circle</span>
                        <p class="text-sm">Giảm 20% ưu đãi sinh nhật</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <span class="material-symbols-outlined text-success">check_circle</span>
                        <p class="text-sm">Nhận ưu đãi 20% áp dụng 01 hóa dơn mua sắm trong tháng sinh nhật</p>
                    </li>
                </ul>
            </div>`;
    } else if (level === 'GOLD') {
        contentHtml = `
            <div class="tier-card tier-gold">
                <div class="tier-badge">G</div>
                <p class="text-xs uppercase font-bold opacity-70">Membership</p>
                <h2>Gold</h2>
                <p class="mt-4 text-sm opacity-80">Hạng mức Vàng với những ưu đãi đặc biệt.</p>
            </div>
            <div class="card p-5">
                <h3 class="text-sm font-bold uppercase mb-4 text-accent">Quyền lợi thành viên</h3>
                <ul class="flex flex-col gap-4">
                    <li class="flex gap-3 items-start">
                        <span class="material-symbols-outlined text-success">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Giảm 10% cho thàng viên</p>
                            <p class="text-xs text-gray mt-1">(Áp dụng cho hóa đơn mua sắm trong năm hạng mức)</p>
                        </div>
                    </li>
                    <li class="flex gap-3 items-start">
                        <span class="material-symbols-outlined text-success">check_circle</span>
                        <p class="text-sm">Giảm 20% ưu đãi sinh nhật</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <span class="material-symbols-outlined text-success">check_circle</span>
                        <p class="text-sm">Nhận ưu đãi 20% áp dụng 01 hóa dơn mua sắm trong tháng sinh nhật</p>
                    </li>
                </ul>
            </div>`;
    } else if (level === 'DIAMOND') {
        contentHtml = `
            <div class="tier-card tier-diamond">
                <div class="tier-badge">D</div>
                <p class="text-xs uppercase font-bold opacity-70">Membership</p>
                <h2>Diamond</h2>
                <p class="mt-4 text-sm opacity-80">Hạng mức Kim Cương cao cấp nhất tại Routine.</p>
            </div>
            <div class="card p-5">
                <h3 class="text-sm font-bold uppercase mb-4 text-accent">Quyền lợi thành viên</h3>
                <ul class="flex flex-col gap-4">
                    <li class="flex gap-3 items-start">
                        <span class="material-symbols-outlined text-success">check_circle</span>
                        <div>
                            <p class="text-sm font-bold">Giảm 20% cho thàng viên</p>
                            <p class="text-xs text-gray mt-1">(Áp dụng cho hóa đơn mua sắm trong năm hạng mức)</p>
                        </div>
                    </li>
                    <li class="flex gap-3 items-start">
                        <span class="material-symbols-outlined text-success">check_circle</span>
                        <p class="text-sm">Giảm 25% ưu đãi sinh nhật</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <span class="material-symbols-outlined text-success">check_circle</span>
                        <p class="text-sm">Nhận ưu đãi 25% áp dụng 01 hóa dơn mua sắm trong tháng sinh nhật</p>
                    </li>
                </ul>
            </div>`;
    }
    dynamicContent.innerHTML = contentHtml;
}

function openGameHub() { openOverlay('game-hub'); }

// --- STORE & BOOKING ---

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
        showView('membership');
    }, 4000);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    showView('home');
});

function switchOffersTab(tabId) {
    document.querySelectorAll('.offer-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');

    document.getElementById('offers-voucher-content').classList.add('hidden');
    document.getElementById('offers-gift-content').classList.add('hidden');
    document.getElementById('offers-' + tabId + '-content').classList.remove('hidden');
}


function renderHomePoints() {
    const el1 = document.getElementById('membership-points');
    const el2 = document.getElementById('home-points');
    if (el1) el1.innerText = userPoints.toLocaleString();
    if (el2) el2.innerText = userPoints.toLocaleString();
}

function updateVoucherPreview() {
    const ipt = document.getElementById('point-input').value;
    const pts = parseInt(ipt) || 0;
    const value = pts * 100; // 1 điểm = 100vnđ voucher
    document.getElementById('voucher-preview').innerText = (value / 1000) + "K";
}


function redeemCustomPoints() {
    const ipt = document.getElementById('point-input').value;
    const pts = parseInt(ipt);
    if (!pts || pts <= 0) return alert('Vui lòng nhập số điểm hợp lệ');
    if (userPoints < pts) return alert('Không đủ điểm!');

    const valueK = (pts * 100) / 1000;

    // Create 3 intelligent options for the user
    const options = [
        { name: "Voucher tiền mặt " + valueK + "K", desc: "Giảm trực tiếp " + valueK + "K cho mọi hóa đơn", val: valueK, type: 'fixed' },
        { name: "Siêu Voucher VIP " + (valueK * 1.5).toFixed(0) + "K", desc: "Giảm " + (valueK * 1.5).toFixed(0) + "K (Áp dụng đơn từ " + (valueK * 4) + "K)", val: valueK * 1.5, type: 'fixed' },
        { name: "Voucher Fan Cứng " + (valueK * 1.2).toFixed(0) + "K", desc: "Giảm " + (valueK * 1.2).toFixed(0) + "K + Tặng 01 túi Tote Canvas", val: valueK * 1.2, type: 'fixed' }
    ];

    const container = document.getElementById('point-redeem-options');
    if (container) {
        container.classList.remove('hidden');
        container.innerHTML = `
            <div style="animation: slideDown 0.4s ease-out;">
                <p class="text-[10px] text-muted mb-4 mt-8 uppercase font-bold tracking-widest text-center">--- 3 Ưu đãi khả dụng ---</p>
                <div class="flex flex-col gap-3">
                    ${options.map((opt, i) => `
                        <div class="card p-4 flex justify-between items-center bg-white shadow-md border-l-4 border-accent">
                            <div class="flex-1 pr-4">
                                <h4 class="font-bold text-xs uppercase" style="letter-spacing: 0.5px;">${opt.name}</h4>
                                <p class="text-[9px] text-gray mt-1">${opt.desc}</p>
                            </div>
                            <button class="btn" style="width: 70px !important; height: 30px !important; min-width: 0 !important; font-size: 10px !important; padding: 0 !important; border-radius: 15px !important; background: #000 !important;" onclick="finalizeRedeem('${opt.name}', ${pts}, '${opt.type}', ${opt.val})">CHỌN</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        // Scroll to options
        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function finalizeRedeem(name, pts, type, val) {
    if (userPoints < pts) return alert('Không đủ điểm!');
    userPoints -= pts;

    userVouchers.push({
        name: name,
        value: "Giảm " + val.toFixed(0) + "K",
        amount: val * 1000,
        mode: type,
        status: 'Chưa sử dụng'
    });

    renderHomePoints();
    renderVouchers();

    const container = document.getElementById('point-redeem-options');
    if (container) container.classList.add('hidden');

    document.getElementById('point-input').value = '';
    updateVoucherPreview();

    document.getElementById('point-success-text').innerText = `Chúc mừng! Bạn đã đổi thành công ${name}. Voucher đã được lưu vào mục Ưu đãi.`;
    const overlay = document.getElementById('overlay-point-success');

    overlay.classList.remove('hidden');
    overlay.style.display = 'flex';
}

function openBadge() {
    openOverlay('badge');
}
