const DATA = {
  button: [
    {
      id: "emergency", cat: "emergency", icon: "🚨",
      title: { ja: "緊急連絡", vi: "Khẩn cấp", id: "Darurat", en: "Emergency", my: "အရေးပေါ်", bn: "জরুরি" },
      sections: [
        {
          label: { ja: "電話番号", vi: "Số điện thoại", id: "Nomor telepon", en: "Phone numbers", my: "ဖုန်းနံပါတ်", bn: "ফোন নম্বর" },
          items: [
            { jp: "119に電話してください\n（救急・火事）", tr: { vi: "Hãy gọi 119\n(Cấp cứu / Cháy)", id: "Tolong hubungi 119\n(Ambulans / Kebakaran)", en: "Please call 119\n(Ambulance / Fire)", my: "119 ခေါ်ပါ\n(ကယ်ဆယ်ယာဉ်/မီး)", bn: "119 ফোন করুন\n(অ্যাম্বুলেন্স/আগুন)" }, color: "red" },
            { jp: "110に電話してください\n（警察）", tr: { vi: "Hãy gọi 110\n(Cảnh sát)", id: "Tolong hubungi 110\n(Polisi)", en: "Please call 110\n(Police)", my: "110 ခေါ်ပါ\n(ရဲ)", bn: "110 ফোন করুন\n(পুলিশ)" }, color: "red" },
          ]
        },
        {
          label: { ja: "伝えるフレーズ", vi: "Câu nói cần thiết", id: "Frasa penting", en: "Key phrases", my: "ပြောရမည့်စကား", bn: "জরুরি বাক্য" },
          items: [
            { jp: "助けてください", tr: { vi: "Xin hãy giúp tôi", id: "Tolong saya", en: "Please help me", my: "ကူညီပါ", bn: "সাহায্য করুন" }, color: "red" },
            { jp: "人が倒れています", tr: { vi: "Có người bị ngã", id: "Ada orang pingsan", en: "Someone has collapsed", my: "လူတစ်ယောက် လဲကျနေသည်", bn: "কেউ পড়ে গেছেন" }, color: "red" },
            { jp: "火事です", tr: { vi: "Có cháy", id: "Ada kebakaran", en: "There is a fire", my: "မီးလောင်နေသည်", bn: "আগুন লেগেছে" }, color: "red" },
            { jp: "交通事故です", tr: { vi: "Có tai nạn giao thông", id: "Ada kecelakaan lalu lintas", en: "There is a traffic accident", my: "ယာဉ်တိုက်မှုဖြစ်သည်", bn: "সড়ক দুর্ঘটনা হয়েছে" }, color: "red" },
            { jp: "住所はここです\n（画面を見せる）", tr: { vi: "Địa chỉ ở đây\n(Cho xem màn hình)", id: "Alamatnya di sini\n(Tunjukkan layar)", en: "The address is here\n(Show screen)", my: "လိပ်စာဒီမှာ\n(မျက်နှာပြင်ပြပါ)", bn: "ঠিকানা এখানে\n(স্ক্রিন দেখান)" }, color: "amber" },
          ]
        }
      ]
    },
    {
      id: "hospital", cat: "hospital", icon: "🏥",
      title: { ja: "病院・薬局", vi: "Bệnh viện / Nhà thuốc", id: "Rumah sakit / Apotek", en: "Hospital / Pharmacy", my: "ဆေးရုံ/ဆေးဆိုင်", bn: "হাসপাতাল/ফার্মেসি" },
      sections: [
        {
          label: { ja: "症状を伝える", vi: "Nói về triệu chứng", id: "Sampaikan gejala", en: "Describe symptoms", my: "ရောဂါလက္ခဏာပြောပါ", bn: "উপসর্গ বলুন" },
          items: [
            { jp: "お腹が痛いです", tr: { vi: "Tôi bị đau bụng", id: "Saya sakit perut", en: "I have a stomachache", my: "ဝမ်းနာသည်", bn: "পেট ব্যথা আছে" }, color: "red" },
            { jp: "頭が痛いです", tr: { vi: "Tôi bị đau đầu", id: "Saya sakit kepala", en: "I have a headache", my: "ခေါင်းကိုက်သည်", bn: "মাথা ব্যথা আছে" }, color: "red" },
            { jp: "熱があります", tr: { vi: "Tôi bị sốt", id: "Saya demam", en: "I have a fever", my: "အဖျားရှိသည်", bn: "জ্বর আছে" }, color: "red" },
            { jp: "吐き気がします", tr: { vi: "Tôi buồn nôn", id: "Saya mual", en: "I feel nauseous", my: "ပျို့ချင်သည်", bn: "বমি বমি লাগছে" }, color: "red" },
            { jp: "ここが痛いです\n（指さして）", tr: { vi: "Chỗ này đau\n(Chỉ vào)", id: "Di sini sakit\n(Tunjuk)", en: "It hurts here\n(Point to it)", my: "ဒီနေရာနာသည်\n(ညွှန်ပြပါ)", bn: "এখানে ব্যথা\n(আঙুল দিয়ে দেখান)" }, color: "red" },
            { jp: "動けません", tr: { vi: "Tôi không thể di chuyển", id: "Saya tidak bisa bergerak", en: "I cannot move", my: "မရွေ့နိုင်ပါ", bn: "নড়াচড়া করতে পারছি না" }, color: "red" },
          ]
        },
        {
          label: { ja: "受付・診察で", vi: "Tại quầy lễ tân / phòng khám", id: "Di resepsionis / ruang periksa", en: "At reception / examination", my: "လက်ခံရေး/စစ်ဆေးခန်းတွင်", bn: "রিসেপশন/পরীক্ষার সময়" },
          items: [
            { jp: "初めて来ました\n診察をお願いします", tr: { vi: "Đây là lần đầu tôi đến\nTôi muốn khám bệnh", id: "Ini pertama kali saya datang\nSaya ingin berobat", en: "First visit\nI would like to see a doctor", my: "ပထမဆုံးလာသည်\nဆေးကုလိုသည်", bn: "প্রথমবার এসেছি\nডাক্তার দেখাতে চাই" }, color: "green" },
            { jp: "保険証があります", tr: { vi: "Tôi có thẻ bảo hiểm", id: "Saya punya kartu asuransi", en: "I have my insurance card", my: "အာမခံကတ်ရှိသည်", bn: "বীমা কার্ড আছে" }, color: "green" },
            { jp: "保険証を忘れました", tr: { vi: "Tôi quên thẻ bảo hiểm", id: "Saya lupa kartu asuransi", en: "I forgot my insurance card", my: "အာမခံကတ်မေ့သည်", bn: "বীমা কার্ড ভুলে এসেছি" }, color: "amber" },
            { jp: "アレルギーはありません", tr: { vi: "Tôi không bị dị ứng", id: "Saya tidak punya alergi", en: "I have no allergies", my: "ဓာတ်မတည့်မှုမရှိ", bn: "কোনো অ্যালার্জি নেই" }, color: "green" },
            { jp: "日本語が\nわかりません", tr: { vi: "Tôi không hiểu\ntiếng Nhật", id: "Saya tidak mengerti\nbahasa Jepang", en: "I don't understand\nJapanese", my: "ဂျပန်စကား\nနားမလည်ပါ", bn: "জাপানি\nবুঝি না" }, color: "amber" },
            { jp: "処方箋があります\n薬をお願いします", tr: { vi: "Tôi có đơn thuốc\nXin hãy cấp thuốc", id: "Saya punya resep\nTolong berikan obatnya", en: "I have a prescription\nPlease give me the medicine", my: "ဆေးညွှန်းရှိသည်\nဆေးပေးပါ", bn: "প্রেসক্রিপশন আছে\nওষুধ দিন" }, color: "green" },
          ]
        }
      ]
    },
    {
      id: "absence", cat: "work", icon: "📞",
      title: { ja: "遅刻・欠勤連絡", vi: "Báo đi muộn / vắng mặt", id: "Lapor terlambat / absen", en: "Late / Absence Notice", my: "နောက်ကျ/ပျက်ကွက်အကြောင်းကြား", bn: "দেরি/অনুপস্থিতির বিজ্ঞপ্তি" },
      sections: [
        {
          label: { ja: "電話で使うフレーズ", vi: "Câu dùng khi gọi điện", id: "Frasa saat menelepon", en: "Phone call phrases", my: "ဖုန်းပြောရမည့်စကား", bn: "ফোনে বলার বাক্য" },
          items: [
            { jp: "○○です。今日\n遅刻します", tr: { vi: "Tôi là ○○. Hôm nay\ntôi sẽ đi muộn", id: "Saya ○○. Hari ini\nsaya akan terlambat", en: "This is ○○. I will be\nlate today", my: "○○ ဖြစ်သည်။ ယနေ့\nနောက်ကျမည်", bn: "আমি ○○। আজ\nদেরি হবে" }, color: "amber" },
            { jp: "○○です。体調が悪く\n今日休みます", tr: { vi: "Tôi là ○○. Tôi bị bệnh\nvà nghỉ hôm nay", id: "Saya ○○. Saya sakit\ndan absen hari ini", en: "This is ○○. I'm sick\nand absent today", my: "○○ ဖြစ်သည်။ နာမကျန်း\nဖြစ်၍ ယနေ့ မတက်နိုင်", bn: "আমি ○○। অসুস্থ\nআজ কাজে আসতে পারব না" }, color: "red" },
            { jp: "電車が遅れています\n○○分遅刻します", tr: { vi: "Tàu điện bị trễ\nTôi sẽ muộn ○○ phút", id: "Kereta terlambat\nSaya terlambat ○○ menit", en: "Train is delayed\n○○ minutes late", my: "ရထားနောက်ကျသည်\n○○မိနစ် နောက်ကျမည်", bn: "ট্রেন দেরি হচ্ছে\n○○ মিনিট দেরি হবে" }, color: "amber" },
            { jp: "よろしく\nお願いします", tr: { vi: "Xin cảm ơn\nvà thông cảm", id: "Mohon\npengertiannya", en: "Thank you for\nunderstanding", my: "ကျေးဇူးပြုပြီး\nနားလည်ပေးပါ", bn: "ধন্যবাদ\nঅনুগ্রহ করে বুঝুন" }, color: "green" },
          ]
        }
      ]
    },
    {
      id: "cityhall", cat: "procedure", icon: "🏛️",
      title: { ja: "役所・銀行", vi: "Cơ quan hành chính / Ngân hàng", id: "Kantor pemerintah / Bank", en: "City Hall / Bank", my: "အစိုးရရုံး/ဘဏ်", bn: "সরকারি অফিস/ব্যাংক" },
      sections: [
        {
          label: { ja: "役所で", vi: "Tại cơ quan hành chính", id: "Di kantor pemerintah", en: "At city hall", my: "အစိုးရရုံးတွင်", bn: "সরকারি অফিসে" },
          items: [
            { jp: "転入届を\n出したいです", tr: { vi: "Tôi muốn nộp\nđơn đăng ký chuyển đến", id: "Saya ingin mengajukan\npendaftaran pindah masuk", en: "I'd like to submit\na move-in registration", my: "ပြောင်းရွှေ့မှတ်ပုံတင်\nလိုသည်", bn: "বাসস্থান পরিবর্তন\nনিবন্ধন করতে চাই" }, color: "green" },
            { jp: "マイナンバーカードを\n作りたいです", tr: { vi: "Tôi muốn\nlàm thẻ My Number", id: "Saya ingin\nmembuat kartu My Number", en: "I'd like to get\na My Number card", my: "မိုင်နမ်ဘာကတ်\nပြုလုပ်လိုသည်", bn: "মাই নম্বর কার্ড\nবানাতে চাই" }, color: "green" },
            { jp: "パスポートと\n在留カードがあります", tr: { vi: "Tôi có hộ chiếu\nvà thẻ cư trú", id: "Saya punya paspor\ndan kartu izin tinggal", en: "I have my passport\nand residence card", my: "နိုင်ငံကူးလက်မှတ်နှင့်\nနေထိုင်ခွင့်ကတ်ရှိသည်", bn: "পাসপোর্ট ও\nরেসিডেন্স কার্ড আছে" }, color: "green" },
            { jp: "日本語が\nわかりません\n通訳はいますか？", tr: { vi: "Tôi không hiểu tiếng Nhật\nCó phiên dịch không?", id: "Saya tidak mengerti Jepang\nAda penerjemah?", en: "I don't understand Japanese\nIs there an interpreter?", my: "ဂျပန်မနားလည်ပါ\nဘာသာပြန် ရှိသလား", bn: "জাপানি বুঝি না\nদোভাষী আছেন?" }, color: "amber" },
          ]
        },
        {
          label: { ja: "銀行・ATMで", vi: "Tại ngân hàng / ATM", id: "Di bank / ATM", en: "At bank / ATM", my: "ဘဏ်/ATM တွင်", bn: "ব্যাংক/ATM এ" },
          items: [
            { jp: "口座を\n開きたいです", tr: { vi: "Tôi muốn\nmở tài khoản", id: "Saya ingin\nmembuka rekening", en: "I'd like to\nopen an account", my: "ဘဏ်အကောင့်\nဖွင့်လိုသည်", bn: "অ্যাকাউন্ট\nখুলতে চাই" }, color: "green" },
            { jp: "お金を\n引き出したいです", tr: { vi: "Tôi muốn\nrút tiền", id: "Saya ingin\nmenarik uang", en: "I'd like to\nwithdraw money", my: "ငွေ\nထုတ်လိုသည်", bn: "টাকা\nতুলতে চাই" }, color: "green" },
            { jp: "海外に\nお金を送りたいです", tr: { vi: "Tôi muốn gửi tiền\nra nước ngoài", id: "Saya ingin mengirim\nuang ke luar negeri", en: "I'd like to send money\noverseas", my: "နိုင်ငံတကာသို့\nငွေလွှဲလိုသည်", bn: "বিদেশে\nটাকা পাঠাতে চাই" }, color: "green" },
          ]
        }
      ]
    },
    {
      id: "supermarket", cat: "daily", icon: "🛒",
      title: { ja: "スーパー・買い物", vi: "Siêu thị / Mua sắm", id: "Supermarket / Belanja", en: "Supermarket / Shopping", my: "စူပါမားကတ်/ဈေးဝယ်", bn: "সুপারমার্কেট/কেনাকাটা" },
      sections: [
        {
          label: { ja: "店員に見せる", vi: "Cho nhân viên xem", id: "Tunjukkan ke pegawai", en: "Show to staff", my: "ဝန်ထမ်းကိုပြပါ", bn: "কর্মীকে দেখান" },
          items: [
            { jp: "これはどこに\nありますか？", tr: { vi: "Cái này ở đâu ạ?", id: "Di mana ini?", en: "Where is this?", my: "ဒါဘယ်မှာ ရှိသလဲ", bn: "এটা কোথায় আছে?" }, color: "green" },
            { jp: "袋をください", tr: { vi: "Cho tôi một túi", id: "Tolong berikan kantong", en: "Please give me a bag", my: "အိတ်ပေးပါ", bn: "একটা ব্যাগ দিন" }, color: "green" },
            { jp: "これはいくらですか？", tr: { vi: "Cái này bao nhiêu tiền?", id: "Ini berapa harganya?", en: "How much is this?", my: "ဒါဘယ်လောက်လဲ", bn: "এটার দাম কত?" }, color: "green" },
            { jp: "ポイントカードが\nあります", tr: { vi: "Tôi có thẻ tích điểm", id: "Saya punya kartu poin", en: "I have a point card", my: "ပွိုင့်ကတ်ရှိသည်", bn: "পয়েন্ট কার্ড আছে" }, color: "green" },
            { jp: "セルフレジの\n使い方を\n教えてください", tr: { vi: "Xin hướng dẫn cách dùng\nmáy tính tiền tự phục vụ", id: "Tolong ajarkan cara\nmenggunakan kasir mandiri", en: "Please show me how to\nuse the self-checkout", my: "ကိုယ်တိုင်ဘောင်ချာ\nထုတ်နည်းသင်ပေးပါ", bn: "সেলফ চেকআউট কীভাবে\nব্যবহার করবেন শেখান" }, color: "amber" },
          ]
        }
      ]
    }
  ],
  card: [
    {
      id: "garbage", cat: "life", icon: "🗑️",
      title: { ja: "ゴミ出しのルール", vi: "Quy tắc đổ rác", id: "Aturan buang sampah", en: "Garbage Rules", my: "အမှိုက်ပစ်စည်းမျဉ်း", bn: "ময়লা ফেলার নিয়ম" },
      items: [
        { jp: "ゴミは種類ごとに分けてください", tr: { vi: "Phân loại rác theo từng loại", id: "Pisahkan sampah menurut jenisnya", en: "Separate garbage by type", my: "အမှိုက်အမျိုးအစားခွဲပါ", bn: "ধরন অনুযায়ী ময়লা আলাদা করুন" }, note: { ja: "燃えるゴミ・燃えないゴミ・資源ゴミ（ペットボトル・缶・瓶）", vi: "Rác cháy / không cháy / tái chế (chai nhựa, lon, chai thủy tinh)", id: "Mudah terbakar / tidak / daur ulang (botol, kaleng, kaca)", en: "Burnable / Non-burnable / Recyclable (PET, cans, glass)", my: "မီးကျွမ်း/မကျွမ်း/ပြန်သုံး", bn: "পোড়ানো যায়/যায় না/রিসাইকেল" } },
        { jp: "決められた曜日・時間に出す", tr: { vi: "Đổ rác đúng ngày và giờ quy định", id: "Buang sampah pada hari dan waktu yang ditentukan", en: "Put out garbage on designated days/times only", my: "သတ်မှတ်နေ့/အချိန်တွင်သာ", bn: "নির্ধারিত দিন ও সময়ে রাখুন" }, note: { ja: "収集日の朝8時までに。前日夜は出さないこと", vi: "Trước 8 giờ sáng ngày thu gom. Không đổ tối hôm trước", id: "Sebelum jam 8 pagi. Jangan malam sebelumnya", en: "By 8am on collection day. Not the night before", my: "မနက် ၈နာရီမတိုင်မီ", bn: "সকাল ৮টার আগে" } },
        { jp: "指定のゴミ袋を使う", tr: { vi: "Dùng túi rác theo quy định", id: "Gunakan kantong sampah yang ditentukan", en: "Use designated garbage bags", my: "သတ်မှတ်အိတ်သုံးပါ", bn: "নির্ধারিত ব্যাগ ব্যবহার করুন" }, note: { ja: "自治体によって異なります。管理者に確認してください", vi: "Khác nhau tùy địa phương. Hỏi người quản lý", id: "Berbeda tergantung daerah. Tanya pengelola", en: "Varies by municipality. Ask your manager", my: "ဒေသအလိုက်ကွဲပြားသည်", bn: "এলাকা অনুযায়ী আলাদা" } },
      ]
    },
    {
      id: "noise", cat: "life", icon: "🔊",
      title: { ja: "騒音・近隣マナー", vi: "Tiếng ồn và phép lịch sự", id: "Kebisingan dan tata krama", en: "Noise & Neighbor Manners", my: "ဆူညံသံ/အိမ်နီးချင်း", bn: "শব্দ ও প্রতিবেশী আচরণ" },
      items: [
        { jp: "夜10時以降は静かにする", tr: { vi: "Giữ yên lặng sau 10 giờ tối", id: "Tenang setelah jam 10 malam", en: "Be quiet after 10pm", my: "ည ၁၀နာရီနောက် တိတ်ဆိတ်ပါ", bn: "রাত ১০টার পর চুপ থাকুন" }, note: { ja: "音楽・テレビ・会話の音量を下げる", vi: "Giảm âm lượng nhạc, TV, tiếng nói chuyện", id: "Kecilkan volume musik, TV, percakapan", en: "Lower music, TV, conversation volume", my: "တေးဂီတ၊ TV၊ စကားသံ လျှော့ပါ", bn: "সঙ্গীত, টিভি, কথাবার্তা কমান" } },
        { jp: "廊下・共用部では走らない", tr: { vi: "Không chạy ở hành lang và khu chung", id: "Jangan berlari di koridor dan area umum", en: "No running in hallways or common areas", my: "လမ်းကြား/ဘုံနေရာတွင် မပြေးပါနှင့်", bn: "করিডোর ও সাধারণ এলাকায় দৌড়াবেন না" }, note: { ja: "他の住人への配慮を忘れずに", vi: "Hãy quan tâm đến cư dân khác", id: "Perhatikan penghuni lain", en: "Be considerate of other residents", my: "အခြားနေသူများကို ဂရုစိုက်ပါ", bn: "অন্য বাসিন্দাদের কথা ভাবুন" } },
      ]
    },
    {
      id: "bicycle", cat: "traffic", icon: "🚲",
      title: { ja: "自転車のルール（法律）", vi: "Luật xe đạp (pháp luật)", id: "Aturan sepeda (hukum)", en: "Bicycle Laws", my: "စက်ဘီးဥပဒေ", bn: "সাইকেল আইন" },
      items: [
        { jp: "信号・一時停止を守る", tr: { vi: "Tuân thủ đèn tín hiệu và dừng tạm thời", id: "Patuhi lampu lalu lintas dan tanda berhenti", en: "Obey traffic signals and stop signs", my: "မီးပိုင်းနှင့် ရပ်တန့်မှတ်တိုင် လိုက်နာပါ", bn: "ট্রাফিক সিগন্যাল ও স্টপ সাইন মানুন" }, note: { ja: "違反すると罰金・逮捕される場合があります", vi: "Vi phạm có thể bị phạt tiền hoặc bắt giữ", id: "Pelanggaran bisa didenda atau ditangkap", en: "Violations may result in fines or arrest", my: "ချိုးဖောက်ပါက ဒဏ်ကြေး/ဖမ်းဆီးခံရနိုင်", bn: "লঙ্ঘনে জরিমানা বা গ্রেফতার হতে পারে" } },
        { jp: "飲酒運転は禁止\n（懲役5年・罰金100万円）", tr: { vi: "Cấm lái xe khi say\n(Tù 5 năm / 1 triệu yên)", id: "Dilarang berkendara mabuk\n(Penjara 5 tahun / 1 juta yen)", en: "No drunk cycling\n(5 yrs prison / ¥1M fine)", my: "မူးယစ်မောင်းနှင်ခြင်းတားမြစ်\n(ထောင် ၅နှစ်/ဒဏ်ကြေး ၁သန်း)", bn: "মদ্যপ সাইকেল নিষিদ্ধ\n(৫ বছর জেল/১০ লাখ ইয়েন)" }, note: { ja: "2024年11月から罰則強化", vi: "Tăng cường xử phạt từ tháng 11/2024", id: "Sanksi diperketat sejak November 2024", en: "Penalties strengthened from Nov 2024", my: "၂၀၂၄ နိုဝင်ဘာမှ ပြစ်ဒဏ်တင်းကြပ်", bn: "২০২৪ নভেম্বর থেকে শাস্তি কঠোর" } },
        { jp: "スマホ・イヤホンしながら運転禁止\n（懲役6か月・罰金10万円）", tr: { vi: "Cấm dùng điện thoại/tai nghe khi đi xe\n(Tù 6 tháng / 100.000 yên)", id: "Dilarang pakai ponsel/earphone saat berkendara\n(6 bulan / 100.000 yen)", en: "No phone/earphone while cycling\n(6 months / ¥100K fine)", my: "ဖုန်း/နားကြပ်သုံးရင်း မောင်းနှင်ခြင်းတားမြစ်\n(ထောင် ၆လ/ဒဏ်ကြေး ၁သိန်း)", bn: "ফোন/ইয়ারফোন সহ সাইকেল নিষিদ্ধ\n(৬ মাস জেল/১ লাখ ইয়েন)" }, note: { ja: "2024年11月から罰則強化", vi: "Tăng cường từ tháng 11/2024", id: "Diperketat sejak November 2024", en: "Strengthened from Nov 2024", my: "၂၀၂၄ နိုဝင်ဘာမှ တင်းကြပ်", bn: "২০২৪ নভেম্বর থেকে কঠোর" } },
        { jp: "夜間はライトを点灯する\n無灯火は違反", tr: { vi: "Bật đèn vào ban đêm\nKhông có đèn là vi phạm", id: "Nyalakan lampu malam hari\nTanpa lampu adalah pelanggaran", en: "Turn on lights at night\nNo light is a violation", my: "ညဘက် မီးထွန်းပါ\nမထွန်းခြင်း ချိုးဖောက်မှု", bn: "রাতে লাইট জ্বালুন\nলাইট না থাকা নিয়ম লঙ্ঘন" }, note: { ja: "前後にライト・反射材を付けること", vi: "Gắn đèn và phản quang trước sau", id: "Pasang lampu dan reflektor depan belakang", en: "Attach front/rear lights and reflectors", my: "ရှေ့နောက်မီးနှင့် သံလျှောက်ပစ္စည်းတပ်ပါ", bn: "সামনে-পেছনে লাইট ও রিফ্লেক্টর লাগান" } },
        { jp: "ヘルメットを着用する（努力義務）", tr: { vi: "Đội mũ bảo hiểm (nghĩa vụ nỗ lực)", id: "Pakai helm (kewajiban upaya)", en: "Wear helmet (effort obligation)", my: "ဦးထုပ်ဆောင်းပါ (ကြိုးပမ်းမှုတာဝန်)", bn: "হেলমেট পরুন (প্রচেষ্টার বাধ্যবাধকতা)" }, note: { ja: "事故時の頭部保護のため強く推奨", vi: "Khuyến khích mạnh để bảo vệ đầu khi tai nạn", id: "Sangat disarankan untuk melindungi kepala", en: "Strongly recommended for head protection", my: "မတော်တဆမှုတွင် ခေါင်းကာကွယ်ရန်", bn: "দুর্ঘটনায় মাথা রক্ষায় দৃঢ়ভাবে বাঞ্ছনীয়" } },
      ]
    },
    {
      id: "security", cat: "security", icon: "🔒",
      title: { ja: "情報セキュリティ・コンプライアンス", vi: "Bảo mật thông tin & tuân thủ", id: "Keamanan informasi & kepatuhan", en: "Info Security & Compliance", my: "သတင်းလုံခြုံရေးနှင့် လိုက်နာမှု", bn: "তথ্য নিরাপত্তা ও কমপ্লায়েন্স" },
      items: [
        { jp: "職場・製品の写真をSNSに投稿しない", tr: { vi: "Không đăng ảnh nơi làm việc/sản phẩm lên MXH", id: "Jangan posting foto tempat kerja/produk di media sosial", en: "Do not post workplace/product photos on SNS", my: "အလုပ်ခွင်/ထုတ်ကုန်ဓါတ်ပုံ SNS မတင်ပါနှင့်", bn: "কর্মক্ষেত্র/পণ্যের ছবি সোশ্যাল মিডিয়ায় পোস্ট করবেন না" }, note: { ja: "法的責任を問われる場合があります", vi: "Có thể bị truy cứu trách nhiệm pháp lý", id: "Dapat dikenai tanggung jawab hukum", en: "May result in legal liability", my: "တရားဝင်တာဝန်ခံရနိုင်", bn: "আইনি দায় হতে পারে" } },
        { jp: "個人情報を外部に漏らさない", tr: { vi: "Không để lộ thông tin cá nhân ra ngoài", id: "Jangan membocorkan informasi pribadi ke luar", en: "Do not leak personal information externally", my: "ကိုယ်ရေးကိုယ်တာသတင်း ပြင်ပသို့မပေးပို့ပါနှင့်", bn: "ব্যক্তিগত তথ্য বাইরে ফাঁস করবেন না" }, note: { ja: "お客様・同僚の情報を含む", vi: "Bao gồm thông tin khách hàng và đồng nghiệp", id: "Termasuk informasi pelanggan dan rekan kerja", en: "Including customer and colleague information", my: "ဖောက်သည်နှင့် လုပ်ဖော်ကိုင်ဖက်သတင်းများပါ", bn: "গ্রাহক ও সহকর্মীর তথ্যসহ" } },
        { jp: "ハラスメントは絶対禁止\nパワハラ・セクハラ・いじめ", tr: { vi: "Tuyệt đối cấm quấy rối\nQuyền lực, tình dục, bắt nạt", id: "Pelecehan sama sekali dilarang\nKekuasaan, seksual, intimidasi", en: "Harassment absolutely prohibited\nPower, sexual, bullying", my: "နှောင့်ယှက်မှု တင်းကြပ်စွာ တားမြစ်\nအာဏာ/လိင်/အနိုင်ကျင့်မှု", bn: "হয়রানি সম্পূর্ণ নিষিদ্ধ\nক্ষমতার অপব্যবহার/যৌন/ধমক" }, note: { ja: "発見した場合は会社の相談窓口へ", vi: "Nếu phát hiện, hãy báo cáo lên bộ phận tư vấn của công ty", id: "Jika ditemukan, laporkan ke bagian konsultasi perusahaan", en: "If found, report to company consultation desk", my: "တွေ့ရှိပါက ကုမ္ပဏီတိုင်ကြားနေရာသို့ပြောပါ", bn: "পেলে কোম্পানির পরামর্শ কেন্দ্রে জানান" } },
        { jp: "差別・偏見のある言動をしない\n国籍・宗教・性別による差別禁止", tr: { vi: "Không có lời nói/hành động phân biệt đối xử\nCấm phân biệt dựa trên quốc tịch, tôn giáo, giới tính", id: "Jangan lakukan ucapan/tindakan diskriminatif\nDilarang diskriminasi berdasarkan kewarganegaraan, agama, jenis kelamin", en: "No discriminatory words/actions\nNo discrimination by nationality, religion, gender", my: "ခွဲခြားဆက်ဆံသောစကား/လုပ်ရပ် မပြုပါနှင့်\nနိုင်ငံသား/ဘာသာ/လိင်ခွဲခြားမှု တားမြစ်", bn: "বৈষম্যমূলক কথা/কাজ করবেন না\nজাতীয়তা/ধর্ম/লিঙ্গ বৈষম্য নিষিদ্ধ" }, note: { ja: "違反した場合は懲戒処分の対象", vi: "Vi phạm có thể bị kỷ luật", id: "Pelanggaran dapat dikenai sanksi disiplin", en: "Violations may result in disciplinary action", my: "ချိုးဖောက်ပါက အချဉ်ပေးအရေးယူမည်", bn: "লঙ্ঘনে শাস্তিমূলক ব্যবস্থা নেওয়া হবে" } },
      ]
    },
    {
      id: "workrules", cat: "work", icon: "💼",
      title: { ja: "職場のルール", vi: "Nội quy nơi làm việc", id: "Peraturan tempat kerja", en: "Workplace Rules", my: "အလုပ်ခွင်စည်းမျဉ်းများ", bn: "কর্মক্ষেত্রের নিয়ম" },
      items: [
        { jp: "清潔感のある服装で出勤する", tr: { vi: "Đến làm việc với trang phục sạch sẽ gọn gàng", id: "Hadir dengan pakaian bersih dan rapi", en: "Come to work in clean, neat clothing", my: "သန့်ရှင်းသပ်ရပ်သောအဝတ်ဖြင့် အလုပ်တက်ပါ", bn: "পরিষ্কার পরিপাটি পোশাকে কাজে আসুন" }, note: { ja: "作業服・安全靴は会社規定に従う", vi: "Tuân theo quy định về quần áo bảo hộ và giày an toàn", id: "Ikuti peraturan pakaian kerja dan sepatu keselamatan", en: "Follow rules for work clothes and safety shoes", my: "အလုပ်ဝတ်စုံ/လုံခြုံရေးဖိနပ် ကုမ္ပဏီစည်းမျဉ်းလိုက်နာပါ", bn: "কর্মপোশাক ও নিরাপত্তা জুতার নিয়ম মানুন" } },
        { jp: "飲酒しての出勤・作業は禁止", tr: { vi: "Cấm đến làm việc hoặc làm việc khi say", id: "Dilarang datang atau bekerja dalam keadaan mabuk", en: "Working while drunk prohibited", my: "မူးယစ်လျှက် အလုပ်တက်ခြင်း/လုပ်ကိုင်ခြင်း တားမြစ်", bn: "মদ্যপ অবস্থায় কাজে আসা বা কাজ করা নিষিদ্ধ" }, note: { ja: "即解雇の対象となる場合があります", vi: "Có thể bị sa thải ngay lập tức", id: "Dapat berakibat pemecatan segera", en: "May result in immediate dismissal", my: "ချက်ချင်းထုတ်ပယ်ခံရနိုင်", bn: "তাৎক্ষণিক বরখাস্ত হতে পারে" } },
        { jp: "作業中はスマホ使用禁止\n（許可された時間以外）", tr: { vi: "Cấm dùng điện thoại khi làm việc\n(Ngoài giờ được phép)", id: "Dilarang menggunakan ponsel saat bekerja\n(Kecuali waktu yang diizinkan)", en: "No smartphone during work\n(Except permitted times)", my: "အလုပ်လုပ်နေစဉ် ဖုန်းသုံးခြင်း တားမြစ်\n(ခွင့်ပြုချိန်မှတစ်ပါး)", bn: "কাজের সময় স্মার্টফোন নিষিদ্ধ\n(অনুমতিপ্রাপ্ত সময় ছাড়া)" }, note: { ja: "事故防止・集中力維持のため", vi: "Để ngăn tai nạn và duy trì sự tập trung", id: "Untuk mencegah kecelakaan dan menjaga konsentrasi", en: "To prevent accidents and maintain concentration", my: "မတော်တဆမှုကာကွယ်ရန်/အာရုံစိုက်မှုထိန်းသိမ်းရန်", bn: "দুর্ঘটনা প্রতিরোধ ও মনোযোগ বজায় রাখতে" } },
      ]
    },
    {
      id: "custom", cat: "custom", icon: "⚙️",
      title: { ja: "会社・現場のルール（カスタム）", vi: "Nội quy công ty / hiện trường (tùy chỉnh)", id: "Aturan perusahaan / lokasi (kustom)", en: "Company / Site Rules (Custom)", my: "ကုမ္ပဏီ/လုပ်ငန်းခွင်စည်းမျဉ်း", bn: "কোম্পানি/সাইটের নিয়ম (কাস্টম)" },
      items: [
        { jp: "御社のルールをここに追加できます\n担当者にお問い合わせください", tr: { vi: "Có thể thêm nội quy công ty vào đây\nLiên hệ người phụ trách", id: "Peraturan perusahaan Anda dapat ditambahkan di sini\nHubungi penanggung jawab", en: "Your company rules can be added here\nContact your representative", my: "ကုမ္ပဏီစည်းမျဉ်းများ ဒီနေရာတွင် ထည့်နိုင်သည်\nတာဝန်ခံသို့ ဆက်သွယ်ပါ", bn: "আপনার কোম্পানির নিয়ম এখানে যোগ করা যাবে\nদায়িত্বশীলের সাথে যোগাযোগ করুন" }, note: { ja: "トクシントラスト 羽根：080-8374-1036", vi: "Tokushin Trust - Hane: 080-8374-1036", id: "Tokushin Trust - Hane: 080-8374-1036", en: "Tokushin Trust - Hane: 080-8374-1036", my: "Tokushin Trust - Hane: 080-8374-1036", bn: "Tokushin Trust - Hane: 080-8374-1036" } },
      ]
    }
  ]
};
