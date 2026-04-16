const DATA = {
  flow: [
    {
      id: "late", icon: "⏰",
      title: { ja: "遅刻しそう", vi: "Sắp đi muộn", id: "Akan terlambat", en: "Going to be late", my: "နောက်ကျတော့မည်", bn: "দেরি হবে" },
      steps: [
        { no: 1, action: { ja: "電話をかける", vi: "Gọi điện thoại", id: "Menelepon", en: "Make a phone call", my: "ဖုန်းခေါ်ပါ", bn: "ফোন করুন" }, show: { ja: "おはようございます。\n○○です。", vi: "Chào buổi sáng.\nTôi là ○○.", id: "Selamat pagi.\nSaya ○○.", en: "Good morning.\nThis is ○○.", my: "မင်္ဂလာနံနက်ခင်းပါ။\nကျွန်တော် ○○ ပါ။", bn: "শুভ সকাল।\nআমি ○○।" } },
        { no: 2, action: { ja: "遅れることを伝える", vi: "Thông báo sẽ đến muộn", id: "Beritahu akan terlambat", en: "Tell them you'll be late", my: "နောက်ကျမည်ဟု အကြောင်းကြားပါ", bn: "দেরি হবে জানান" }, show: { ja: "今日、遅刻します。\n○○分ほど遅れます。", vi: "Hôm nay tôi sẽ đi muộn.\nKhoảng ○○ phút.", id: "Hari ini saya terlambat.\nSekitar ○○ menit.", en: "I will be late today.\nAbout ○○ minutes late.", my: "ယနေ့ နောက်ကျမည်ဖြစ်သည်။\n○○မိနစ်ခန့် နောက်ကျမည်။", bn: "আজ দেরি হবে।\nআমি প্রায় ○○ মিনিট দেরি করব।" } },
        { no: 3, action: { ja: "理由を選ぶ", vi: "Chọn lý do", id: "Pilih alasan", en: "Choose a reason", my: "အကြောင်းပြချက်ရွေးပါ", bn: "কারণ বেছে নিন" }, options: [
          { ja: "電車が遅れています。", vi: "Tàu điện bị trễ.", id: "Kereta terlambat.", en: "The train is delayed.", my: "ရထားနောက်ကျနေသည်။", bn: "ট্রেন দেরি হচ্ছে।" },
          { ja: "渋滞しています。", vi: "Đường bị tắc.", id: "Macet.", en: "There is traffic.", my: "ယာဉ်ကြောပိတ်ဆို့နေသည်။", bn: "যানজট আছে।" },
          { ja: "寝坊しました。\n申し訳ありません。", vi: "Tôi dậy muộn.\nXin lỗi.", id: "Saya kesiangan.\nMaaf.", en: "I overslept.\nI'm sorry.", my: "အိပ်ရာထနောက်ကျခဲ့သည်။\nတောင်းပန်ပါသည်။", bn: "ঘুম থেকে দেরিতে উঠেছি।\nমাফ করবেন।" },
        ]},
        { no: 4, action: { ja: "締めの言葉", vi: "Lời kết", id: "Kata penutup", en: "Closing words", my: "နိဂုံးချုပ်စကား", bn: "শেষ কথা" }, show: { ja: "よろしくお願いします。\n失礼します。", vi: "Xin cảm ơn và thông cảm.\nXin chào.", id: "Mohon pengertiannya.\nSampai jumpa.", en: "Thank you for understanding.\nGoodbye.", my: "ကျေးဇူးပြုပြီး နားလည်ပေးပါ။\nကျေးဇူးပါ။", bn: "ধন্যবাদ বুঝার জন্য।\nবিদায়।" } },
      ]
    },
    {
      id: "sick", icon: "🤒",
      title: { ja: "体調が悪い・休みたい", vi: "Không khỏe / Muốn nghỉ", id: "Tidak enak badan / Ingin absen", en: "Feel sick / Want day off", my: "နာမကျန်းဖြစ်သည် / အနားယူလိုသည်", bn: "অসুস্থ / ছুটি নিতে চাই" },
      steps: [
        { no: 1, action: { ja: "電話をかける（始業30分前まで）", vi: "Gọi điện (trước 30 phút làm việc)", id: "Telepon (30 menit sebelum kerja)", en: "Call (30 min before work starts)", my: "ဖုန်းခေါ်ပါ (အလုပ်မစမီ ၃၀မိနစ်ကြိုတင်)", bn: "ফোন করুন (কাজ শুরুর ৩০ মিনিট আগে)" }, show: { ja: "おはようございます。\n○○です。", vi: "Chào buổi sáng.\nTôi là ○○.", id: "Selamat pagi.\nSaya ○○.", en: "Good morning.\nThis is ○○.", my: "မင်္ဂလာနံနက်ခင်းပါ။\nကျွန်တော် ○○ ပါ။", bn: "শুভ সকাল।\nআমি ○○।" } },
        { no: 2, action: { ja: "休みたいことを伝える", vi: "Thông báo muốn nghỉ", id: "Beritahu ingin absen", en: "Tell them you need the day off", my: "အနားယူလိုကြောင်း အကြောင်းကြားပါ", bn: "ছুটি নিতে চান জানান" }, show: { ja: "今日、体調が悪くて\n休ませてください。\nよろしくお願いします。", vi: "Hôm nay tôi không khỏe,\nxin cho tôi nghỉ.\nCảm ơn.", id: "Hari ini saya tidak enak badan,\nmohon izin absen.\nTerima kasih.", en: "I'm not feeling well today.\nPlease allow me to take the day off.\nThank you.", my: "ယနေ့ နာမကျန်းဖြစ်၍\nအနားယူခွင့်ပြုပါ။\nကျေးဇူးပါ။", bn: "আজ অসুস্থ বোধ করছি।\nছুটি দিন দয়া করে।\nধন্যবাদ।" } },
        { no: 3, action: { ja: "症状を選ぶ（任意）", vi: "Chọn triệu chứng (tùy chọn)", id: "Pilih gejala (opsional)", en: "Choose symptom (optional)", my: "ရောဂါလက္ခဏာရွေးပါ (ရွေးချယ်မှု)", bn: "উপসর্গ বেছে নিন (ঐচ্ছিক)" }, options: [
          { ja: "熱があります。", vi: "Tôi bị sốt.", id: "Saya demam.", en: "I have a fever.", my: "အဖျားရှိသည်။", bn: "জ্বর আছে।" },
          { ja: "お腹が痛いです。", vi: "Tôi bị đau bụng.", id: "Saya sakit perut.", en: "I have a stomachache.", my: "ဝမ်းနာသည်။", bn: "পেট ব্যথা আছে।" },
          { ja: "頭が痛いです。", vi: "Tôi bị đau đầu.", id: "Saya sakit kepala.", en: "I have a headache.", my: "ခေါင်းကိုက်သည်။", bn: "মাথা ব্যথা আছে।" },
          { ja: "病院に行きます。", vi: "Tôi sẽ đi bệnh viện.", id: "Saya akan ke rumah sakit.", en: "I will go to the hospital.", my: "ဆေးရုံသွားမည်။", bn: "হাসপাতালে যাব।" },
        ]},
      ]
    },
    {
      id: "work_trouble", icon: "🔧",
      title: { ja: "仕事でわからない・困った", vi: "Không hiểu / Khó khăn trong công việc", id: "Tidak mengerti / Ada masalah", en: "Don't understand / Having trouble", my: "အလုပ်တွင် နားမလည် / အခက်အခဲဖြစ်သည်", bn: "কাজে বুঝছি না / সমস্যা হচ্ছে" },
      steps: [
        { no: 1, action: { ja: "担当者を呼ぶ", vi: "Gọi người phụ trách", id: "Panggil penanggung jawab", en: "Call your supervisor", my: "တာဝန်ခံကိုခေါ်ပါ", bn: "দায়িত্বশীলকে ডাকুন" }, show: { ja: "すみません。\n教えてください。", vi: "Xin lỗi.\nXin hãy chỉ cho tôi.", id: "Permisi.\nTolong ajarkan saya.", en: "Excuse me.\nPlease show me.", my: "ခွင့်တောင်းပါသည်။\nသင်ပေးပါ။", bn: "মাফ করবেন।\nআমাকে দেখান দয়া করে।" } },
        { no: 2, action: { ja: "状況を選ぶ", vi: "Chọn tình huống", id: "Pilih situasi", en: "Choose your situation", my: "အခြေအနေရွေးပါ", bn: "পরিস্থিতি বেছে নিন" }, options: [
          { ja: "これはどうやって\nやりますか？", vi: "Cái này làm thế nào ạ?", id: "Ini caranya bagaimana?", en: "How do I do this?", my: "ဒါကိုဘယ်လိုလုပ်ရမလဲ", bn: "এটা কীভাবে করব?" },
          { ja: "もう一度\n教えてください。", vi: "Xin hãy dạy lại một lần nữa.", id: "Tolong ajarkan sekali lagi.", en: "Please show me one more time.", my: "တစ်ကြိမ်ထပ်သင်ပေးပါ။", bn: "আরেকবার শেখান দয়া করে।" },
          { ja: "機械が\n動きません。", vi: "Máy không hoạt động.", id: "Mesin tidak berjalan.", en: "The machine won't work.", my: "စက်မလည်ပတ်ပါ။", bn: "মেশিন কাজ করছে না।" },
          { ja: "これは\n不良品ですか？", vi: "Cái này có phải hàng lỗi không?", id: "Ini barang cacat?", en: "Is this defective?", my: "ဒါချို့ယွင်းချက်ရှိသလား", bn: "এটা কি ত্রুটিপূর্ণ?" },
          { ja: "危険です！\n止めてください！", vi: "Nguy hiểm!\nXin hãy dừng lại!", id: "Berbahaya!\nTolong hentikan!", en: "Danger!\nPlease stop!", my: "အန္တရာယ်ရှိသည်！\nရပ်ပါ！", bn: "বিপজ্জনক!\nথামুন দয়া করে!" },
        ]},
      ]
    },
    {
      id: "garbage", icon: "🗑️",
      title: { ja: "ゴミを出したい", vi: "Muốn đổ rác", id: "Ingin membuang sampah", en: "Want to take out garbage", my: "အမှိုက်ပစ်လိုသည်", bn: "ময়লা ফেলতে চাই" },
      steps: [
        { no: 1, action: { ja: "ゴミの種類を確認する", vi: "Kiểm tra loại rác", id: "Periksa jenis sampah", en: "Check garbage type", my: "အမှိုက်အမျိုးအစားစစ်ဆေးပါ", bn: "ময়লার ধরন দেখুন" }, options: [
          { ja: "燃えるゴミ\n（生ゴミ・紙・布）", vi: "Rác cháy\n(Thực phẩm, giấy, vải)", id: "Mudah terbakar\n(Sisa makanan, kertas, kain)", en: "Burnable\n(Food waste, paper, cloth)", my: "မီးကျွမ်းနိုင်သောအမှိုက်\n(အစားအသောက်/စာရွက်/အထည်)", bn: "পোড়ানো যায়\n(খাবার/কাগজ/কাপড়)" },
          { ja: "燃えないゴミ\n（金属・ガラス・陶器）", vi: "Rác không cháy\n(Kim loại, thủy tinh, gốm)", id: "Tidak mudah terbakar\n(Logam, kaca, keramik)", en: "Non-burnable\n(Metal, glass, ceramic)", my: "မီးမကျွမ်းနိုင်သောအမှိုက်\n(သတ္တု/မှန်/မြေဆီ)", bn: "পোড়ানো যায় না\n(ধাতু/কাচ/সিরামিক)" },
          { ja: "資源ゴミ\n（ペットボトル・缶・瓶）", vi: "Rác tái chế\n(Chai nhựa, lon, chai thủy tinh)", id: "Daur ulang\n(Botol plastik, kaleng, botol kaca)", en: "Recyclable\n(PET bottles, cans, glass)", my: "ပြန်လည်အသုံးပြုနိုင်သောအမှိုက်\n(ပလပ်စတစ်ဘူး/သံဗူး/မှန်ဘူး)", bn: "রিসাইকেল করা যায়\n(প্লাস্টিক/ক্যান/কাচের বোতল)" },
        ]},
        { no: 2, action: { ja: "収集日・時間を確認する", vi: "Kiểm tra ngày và giờ thu gom", id: "Periksa hari pengangkutan", en: "Check collection day/time", my: "စုဆောင်းနေ့နှင့်အချိန်စစ်ဆေးပါ", bn: "সংগ্রহের দিন ও সময় দেখুন" }, show: { ja: "収集日の朝8時までに出す。\n前日の夜は出さないでください。", vi: "Đổ rác trước 8 giờ sáng ngày thu gom.\nKhông đổ vào tối hôm trước.", id: "Keluarkan sebelum jam 8 pagi.\nJangan malam sebelumnya.", en: "Put out by 8am on collection day.\nDo not put out the night before.", my: "စုဆောင်းနေ့မနက် ၈နာရီမတိုင်မီ ထုတ်ပါ။\nညနေပိုင်းတွင် မထုတ်ပါနှင့်။", bn: "সংগ্রহের দিন সকাল ৮টার আগে রাখুন।\nআগের রাতে রাখবেন না।" } },
        { no: 3, action: { ja: "指定袋に入れて出す", vi: "Cho vào túi quy định và đổ", id: "Masukkan ke kantong yang ditentukan", en: "Put in designated bag and take out", my: "သတ်မှတ်အိတ်ထဲထည့်ပြီး ထုတ်ပါ", bn: "নির্ধারিত ব্যাগে রেখে ফেলুন" }, show: { ja: "指定のゴミ袋を使ってください。\nゴミ置き場に出してください。", vi: "Hãy dùng túi rác quy định.\nĐặt ở nơi để rác.", id: "Gunakan kantong sampah yang ditentukan.\nLetakkan di tempat pembuangan.", en: "Use the designated garbage bag.\nPut it at the collection point.", my: "သတ်မှတ်အမှိုက်အိတ်သုံးပါ။\nအမှိုက်ထားသောနေရာတွင် ထားပါ။", bn: "নির্ধারিত ময়লার ব্যাগ ব্যবহার করুন।\nময়লা রাখার জায়গায় রাখুন।" } },
      ]
    },
    {
      id: "hospital_flow", icon: "🏥",
      title: { ja: "病院に行きたい", vi: "Muốn đi bệnh viện", id: "Ingin pergi ke rumah sakit", en: "Want to go to hospital", my: "ဆေးရုံသွားလိုသည်", bn: "হাসপাতালে যেতে চাই" },
      steps: [
        { no: 1, action: { ja: "保険証を持つ", vi: "Mang theo thẻ bảo hiểm", id: "Bawa kartu asuransi", en: "Bring your insurance card", my: "အာမခံကတ်ယူဆောင်ပါ", bn: "বীমা কার্ড নিন" }, show: { ja: "保険証を持ちましたか？\n忘れずに持って行ってください。", vi: "Bạn đã mang thẻ bảo hiểm chưa?\nĐừng quên mang theo.", id: "Sudah membawa kartu asuransi?\nJangan lupa dibawa.", en: "Have you got your insurance card?\nDon't forget to bring it.", my: "အာမခံကတ်ယူလိုက်ပြီလား？\nမေ့မနေပါနှင့်။", bn: "বীমা কার্ড নিয়েছেন?\nভুলবেন না।" } },
        { no: 2, action: { ja: "症状を選ぶ", vi: "Chọn triệu chứng", id: "Pilih gejala", en: "Choose your symptom", my: "ရောဂါလက္ခဏာရွေးပါ", bn: "উপসর্গ বেছে নিন" }, options: [
          { ja: "お腹が痛いです。", vi: "Tôi bị đau bụng.", id: "Saya sakit perut.", en: "I have a stomachache.", my: "ဝမ်းနာသည်။", bn: "পেট ব্যথা আছে।" },
          { ja: "頭が痛いです。", vi: "Tôi bị đau đầu.", id: "Saya sakit kepala.", en: "I have a headache.", my: "ခေါင်းကိုက်သည်။", bn: "মাথা ব্যথা আছে।" },
          { ja: "熱があります。", vi: "Tôi bị sốt.", id: "Saya demam.", en: "I have a fever.", my: "အဖျားရှိသည်။", bn: "জ্বর আছে।" },
          { ja: "ここが痛いです。\n（指さして）", vi: "Chỗ này đau.\n(Chỉ vào)", id: "Di sini sakit.\n(Tunjuk)", en: "It hurts here.\n(Point to it)", my: "ဒီနေရာနာသည်။\n(ညွှန်ပြပါ)", bn: "এখানে ব্যথা।\n(আঙুল দিয়ে দেখান)" },
          { ja: "吐き気がします。", vi: "Tôi buồn nôn.", id: "Saya mual.", en: "I feel nauseous.", my: "ပျို့ချင်သည်။", bn: "বমি বমি লাগছে।" },
        ]},
        { no: 3, action: { ja: "受付で見せる", vi: "Cho xem tại quầy lễ tân", id: "Tunjukkan di resepsionis", en: "Show at reception", my: "လက်ခံရေးကောင်တာတွင် ပြပါ", bn: "রিসেপশনে দেখান" }, show: { ja: "初めて来ました。\n診察をお願いします。\n保険証があります。", vi: "Đây là lần đầu tôi đến.\nTôi muốn khám bệnh.\nTôi có thẻ bảo hiểm.", id: "Ini pertama kali saya datang.\nSaya ingin berobat.\nSaya punya kartu asuransi.", en: "This is my first visit.\nI would like to see a doctor.\nI have my insurance card.", my: "ပထမဆုံးလာသည်။\nဆေးကုလိုသည်။\nအာမခံကတ်ရှိသည်။", bn: "প্রথমবার এসেছি।\nডাক্তার দেখাতে চাই।\nবীমা কার্ড আছে।" } },
        { no: 4, action: { ja: "わからないとき", vi: "Khi không hiểu", id: "Ketika tidak mengerti", en: "When you don't understand", my: "နားမလည်သောအခါ", bn: "না বুঝলে" }, show: { ja: "日本語がわかりません。\nゆっくり話してください。", vi: "Tôi không hiểu tiếng Nhật.\nXin hãy nói chậm lại.", id: "Saya tidak mengerti bahasa Jepang.\nTolong berbicara pelan-pelan.", en: "I don't understand Japanese.\nPlease speak slowly.", my: "ဂျပန်စကား နားမလည်ပါ။\nဖြေးဖြေးပြောပေးပါ။", bn: "জাপানি বুঝি না।\nধীরে কথা বলুন।" } },
      ]
    }
  ],
  button: [
    {
      id: "emergency", cat: "emergency", icon: "🚨",
      title: { ja: "緊急連絡", vi: "Khẩn cấp", id: "Darurat", en: "Emergency", my: "အရေးပေါ်", bn: "জরুরি" },
      sections: [
        { label: { ja: "電話番号", vi: "Số điện thoại", id: "Nomor telepon", en: "Phone numbers", my: "ဖုန်းနံပါတ်", bn: "ফোন নম্বর" }, items: [
          { jp: "119に電話してください\n（救急・火事）", tr: { vi: "Hãy gọi 119\n(Cấp cứu / Cháy)", id: "Tolong hubungi 119\n(Ambulans / Kebakaran)", en: "Please call 119\n(Ambulance / Fire)", my: "119 ခေါ်ပါ\n(ကယ်ဆယ်ယာဉ်/မီး)", bn: "119 ফোন করুন\n(অ্যাম্বুলেন্স/আগুন)" }, color: "red" },
          { jp: "110に電話してください\n（警察）", tr: { vi: "Hãy gọi 110\n(Cảnh sát)", id: "Tolong hubungi 110\n(Polisi)", en: "Please call 110\n(Police)", my: "110 ခေါ်ပါ\n(ရဲ)", bn: "110 ফোন করুন\n(পুলিশ)" }, color: "red" },
        ]},
        { label: { ja: "伝えるフレーズ", vi: "Câu nói cần thiết", id: "Frasa penting", en: "Key phrases", my: "ပြောရမည့်စကား", bn: "জরুরি বাক্য" }, items: [
          { jp: "助けてください", tr: { vi: "Xin hãy giúp tôi", id: "Tolong saya", en: "Please help me", my: "ကူညီပါ", bn: "সাহায্য করুন" }, color: "red" },
          { jp: "人が倒れています", tr: { vi: "Có người bị ngã", id: "Ada orang pingsan", en: "Someone has collapsed", my: "လူတစ်ယောက် လဲကျနေသည်", bn: "কেউ পড়ে গেছেন" }, color: "red" },
          { jp: "火事です", tr: { vi: "Có cháy", id: "Ada kebakaran", en: "There is a fire", my: "မီးလောင်နေသည်", bn: "আগুন লেগেছে" }, color: "red" },
          { jp: "住所はここです\n（画面を見せる）", tr: { vi: "Địa chỉ ở đây\n(Cho xem màn hình)", id: "Alamatnya di sini\n(Tunjukkan layar)", en: "The address is here\n(Show screen)", my: "လိပ်စာဒီမှာ\n(မျက်နှာပြင်ပြပါ)", bn: "ঠিকানা এখানে\n(স্ক্রিন দেখান)" }, color: "amber" },
        ]},
      ]
    },
    {
      id: "hospital", cat: "hospital", icon: "🏥",
      title: { ja: "病院・薬局", vi: "Bệnh viện / Nhà thuốc", id: "Rumah sakit / Apotek", en: "Hospital / Pharmacy", my: "ဆေးရုံ/ဆေးဆိုင်", bn: "হাসপাতাল/ফার্মেসি" },
      sections: [
        { label: { ja: "症状を伝える", vi: "Nói về triệu chứng", id: "Sampaikan gejala", en: "Describe symptoms", my: "ရောဂါလက္ခဏာပြောပါ", bn: "উপসর্গ বলুন" }, items: [
          { jp: "お腹が痛いです", tr: { vi: "Tôi bị đau bụng", id: "Saya sakit perut", en: "I have a stomachache", my: "ဝမ်းနာသည်", bn: "পেট ব্যথা আছে" }, color: "red" },
          { jp: "頭が痛いです", tr: { vi: "Tôi bị đau đầu", id: "Saya sakit kepala", en: "I have a headache", my: "ခေါင်းကိုက်သည်", bn: "মাথা ব্যথা আছে" }, color: "red" },
          { jp: "熱があります", tr: { vi: "Tôi bị sốt", id: "Saya demam", en: "I have a fever", my: "အဖျားရှိသည်", bn: "জ্বর আছে" }, color: "red" },
          { jp: "ここが痛いです\n（指さして）", tr: { vi: "Chỗ này đau\n(Chỉ vào)", id: "Di sini sakit\n(Tunjuk)", en: "It hurts here\n(Point to it)", my: "ဒီနေရာနာသည်\n(ညွှန်ပြပါ)", bn: "এখানে ব্যথা\n(আঙুল দিয়ে দেখান)" }, color: "red" },
          { jp: "動けません", tr: { vi: "Tôi không thể di chuyển", id: "Saya tidak bisa bergerak", en: "I cannot move", my: "မရွေ့နိုင်ပါ", bn: "নড়াচড়া করতে পারছি না" }, color: "red" },
        ]},
        { label: { ja: "受付・診察で", vi: "Tại quầy lễ tân", id: "Di resepsionis", en: "At reception", my: "လက်ခံရေးကောင်တာတွင်", bn: "রিসেপশনে" }, items: [
          { jp: "初めて来ました\n診察をお願いします", tr: { vi: "Lần đầu đến\nMuốn khám bệnh", id: "Pertama kali datang\nIngin berobat", en: "First visit\nI'd like to see a doctor", my: "ပထမဆုံးလာသည်\nဆေးကုလိုသည်", bn: "প্রথমবার এসেছি\nডাক্তার দেখাতে চাই" }, color: "green" },
          { jp: "保険証があります", tr: { vi: "Tôi có thẻ bảo hiểm", id: "Saya punya kartu asuransi", en: "I have my insurance card", my: "အာမခံကတ်ရှိသည်", bn: "বীমা কার্ড আছে" }, color: "green" },
          { jp: "保険証を忘れました", tr: { vi: "Tôi quên thẻ bảo hiểm", id: "Saya lupa kartu asuransi", en: "I forgot my insurance card", my: "အာမခံကတ်မေ့သည်", bn: "বীমা কার্ড ভুলে এসেছি" }, color: "amber" },
          { jp: "日本語が\nわかりません", tr: { vi: "Tôi không hiểu\ntiếng Nhật", id: "Tidak mengerti\nbahasa Jepang", en: "I don't understand\nJapanese", my: "ဂျပန်စကား\nနားမလည်ပါ", bn: "জাপানি\nবুঝি না" }, color: "amber" },
          { jp: "処方箋があります\n薬をお願いします", tr: { vi: "Có đơn thuốc\nXin thuốc", id: "Punya resep\nMinta obat", en: "Have prescription\nPlease give medicine", my: "ဆေးညွှန်းရှိသည်\nဆေးပေးပါ", bn: "প্রেসক্রিপশন আছে\nওষুধ দিন" }, color: "green" },
        ]},
      ]
    },
    {
      id: "cityhall", cat: "procedure", icon: "🏛️",
      title: { ja: "役所・銀行", vi: "Cơ quan hành chính / Ngân hàng", id: "Kantor pemerintah / Bank", en: "City Hall / Bank", my: "အစိုးရရုံး/ဘဏ်", bn: "সরকারি অফিস/ব্যাংক" },
      sections: [
        { label: { ja: "役所・銀行で", vi: "Tại cơ quan / ngân hàng", id: "Di kantor / bank", en: "At city hall / bank", my: "အစိုးရရုံး/ဘဏ်တွင်", bn: "অফিস/ব্যাংকে" }, items: [
          { jp: "転入届を出したいです", tr: { vi: "Muốn nộp đơn đăng ký chuyển đến", id: "Ingin mengajukan pendaftaran pindah", en: "I'd like to register my move", my: "ပြောင်းရွှေ့မှတ်ပုံတင်လိုသည်", bn: "বাসস্থান পরিবর্তন নিবন্ধন করতে চাই" }, color: "green" },
          { jp: "マイナンバーカードを\n作りたいです", tr: { vi: "Muốn làm thẻ My Number", id: "Ingin membuat kartu My Number", en: "I'd like a My Number card", my: "မိုင်နမ်ဘာကတ်ပြုလုပ်လိုသည်", bn: "মাই নম্বর কার্ড বানাতে চাই" }, color: "green" },
          { jp: "日本語がわかりません\n通訳はいますか？", tr: { vi: "Không hiểu tiếng Nhật\nCó phiên dịch không?", id: "Tidak mengerti Jepang\nAda penerjemah?", en: "Don't understand Japanese\nIs there an interpreter?", my: "ဂျပန်မနားလည်ပါ\nဘာသာပြန် ရှိသလား", bn: "জাপানি বুঝি না\nদোভাষী আছেন?" }, color: "amber" },
          { jp: "口座を開きたいです", tr: { vi: "Muốn mở tài khoản", id: "Ingin membuka rekening", en: "I'd like to open an account", my: "ဘဏ်အကောင့်ဖွင့်လိုသည်", bn: "অ্যাকাউন্ট খুলতে চাই" }, color: "green" },
          { jp: "海外にお金を送りたいです", tr: { vi: "Muốn gửi tiền ra nước ngoài", id: "Ingin mengirim uang ke luar negeri", en: "I'd like to send money overseas", my: "နိုင်ငံတကာသို့ ငွေလွှဲလိုသည်", bn: "বিদেশে টাকা পাঠাতে চাই" }, color: "green" },
        ]},
      ]
    },
    {
      id: "supermarket", cat: "daily", icon: "🛒",
      title: { ja: "スーパー・買い物", vi: "Siêu thị / Mua sắm", id: "Supermarket / Belanja", en: "Supermarket / Shopping", my: "စူပါမားကတ်/ဈေးဝယ်", bn: "সুপারমার্কেট/কেনাকাটা" },
      sections: [
        { label: { ja: "店員に見せる", vi: "Cho nhân viên xem", id: "Tunjukkan ke pegawai", en: "Show to staff", my: "ဝန်ထမ်းကိုပြပါ", bn: "কর্মীকে দেখান" }, items: [
          { jp: "これはどこにありますか？", tr: { vi: "Cái này ở đâu ạ?", id: "Di mana ini?", en: "Where is this?", my: "ဒါဘယ်မှာ ရှိသလဲ", bn: "এটা কোথায় আছে?" }, color: "green" },
          { jp: "袋をください", tr: { vi: "Cho tôi một túi", id: "Tolong berikan kantong", en: "Please give me a bag", my: "အိတ်ပေးပါ", bn: "একটা ব্যাগ দিন" }, color: "green" },
          { jp: "ポイントカードがあります", tr: { vi: "Tôi có thẻ tích điểm", id: "Saya punya kartu poin", en: "I have a point card", my: "ပွိုင့်ကတ်ရှိသည်", bn: "পয়েন্ট কার্ড আছে" }, color: "green" },
          { jp: "セルフレジの使い方を\n教えてください", tr: { vi: "Xin hướng dẫn dùng\nmáy tự phục vụ", id: "Tolong ajarkan cara\nkasir mandiri", en: "Please show me how to\nuse self-checkout", my: "ကိုယ်တိုင်ဘောင်ချာထုတ်နည်း\nသင်ပေးပါ", bn: "সেলফ চেকআউট কীভাবে\nব্যবহার করবেন শেখান" }, color: "amber" },
        ]},
      ]
    },
  ],
  card: [
    {
      id: "garbage", cat: "life", icon: "🗑️",
      title: { ja: "ゴミ出しのルール", vi: "Quy tắc đổ rác", id: "Aturan buang sampah", en: "Garbage Rules", my: "အမှိုက်ပစ်စည်းမျဉ်း", bn: "ময়লা ফেলার নিয়ম" },
      items: [
        { jp: "種類ごとに分ける\n燃えるゴミ・燃えないゴミ・資源ゴミ", tr: { vi: "Phân loại: cháy / không cháy / tái chế", id: "Pisahkan: mudah terbakar / tidak / daur ulang", en: "Separate: burnable / non-burnable / recyclable", my: "ခွဲခြားပါ: မီးကျွမ်း/မကျွမ်း/ပြန်သုံး", bn: "আলাদা করুন: পোড়ানো যায়/যায় না/রিসাইকেল" }, note: null },
        { jp: "収集日の朝8時までに出す\n前日の夜は出さないこと", tr: { vi: "Trước 8 giờ sáng ngày thu gom\nKhông đổ tối hôm trước", id: "Sebelum jam 8 pagi hari pengangkutan\nJangan malam sebelumnya", en: "By 8am on collection day\nNot the night before", my: "မနက် ၈နာရီမတိုင်မီ ထုတ်ပါ\nညနေပိုင်းတွင် မထုတ်ပါနှင့်", bn: "সকাল ৮টার আগে রাখুন\nআগের রাতে রাখবেন না" }, note: null },
        { jp: "指定のゴミ袋を使う\n（自治体によって異なります）", tr: { vi: "Dùng túi quy định\n(Khác nhau tùy địa phương)", id: "Gunakan kantong yang ditentukan\n(Berbeda tergantung daerah)", en: "Use designated bags\n(Varies by municipality)", my: "သတ်မှတ်အိတ်သုံးပါ\n(ဒေသအလိုက်ကွဲပြားသည်)", bn: "নির্ধারিত ব্যাগ ব্যবহার করুন\n(এলাকা অনুযায়ী আলাদা)" }, note: null },
      ]
    },
    {
      id: "noise", cat: "life", icon: "🔊",
      title: { ja: "騒音・近隣マナー", vi: "Tiếng ồn và phép lịch sự", id: "Kebisingan dan tata krama", en: "Noise & Neighbor Manners", my: "ဆူညံသံ/အိမ်နီးချင်း", bn: "শব্দ ও প্রতিবেশী আচরণ" },
      items: [
        { jp: "夜10時以降は静かにする\n音楽・テレビ・会話の音量を下げる", tr: { vi: "Yên lặng sau 10 giờ tối\nGiảm âm lượng nhạc, TV, tiếng nói", id: "Tenang setelah jam 10\nKecilkan volume musik, TV, percakapan", en: "Quiet after 10pm\nLower music, TV, conversation", my: "ည ၁၀နာရီနောက် တိတ်ဆိတ်ပါ\nတေးဂီတ၊ TV၊ စကားသံ လျှော့ပါ", bn: "রাত ১০টার পর চুপ\nসঙ্গীত/টিভি/কথাবার্তা কমান" }, note: null },
        { jp: "廊下・共用部では走らない\n他の住人への配慮を忘れずに", tr: { vi: "Không chạy ở hành lang\nHãy quan tâm đến cư dân khác", id: "Jangan berlari di koridor\nPerhatikan penghuni lain", en: "No running in hallways\nBe considerate of others", my: "လမ်းကြားတွင် မပြေးပါနှင့်\nအခြားနေသူများကို ဂရုစိုက်ပါ", bn: "করিডোরে দৌড়াবেন না\nঅন্যদের কথা ভাবুন" }, note: null },
      ]
    },
    {
      id: "bicycle", cat: "traffic", icon: "🚲",
      title: { ja: "自転車のルール（法律）", vi: "Luật xe đạp", id: "Aturan sepeda (hukum)", en: "Bicycle Laws", my: "စက်ဘီးဥပဒေ", bn: "সাইকেল আইন" },
      items: [
        { jp: "飲酒運転は禁止\n懲役5年・罰金100万円（2024年11月〜強化）", tr: { vi: "Cấm lái xe khi say\n5 năm tù / 1 triệu yên (từ 11/2024)", id: "Dilarang mabuk berkendara\n5 tahun / 1 juta yen (Nov 2024)", en: "No drunk cycling\n5 yrs / ¥1M fine (from Nov 2024)", my: "မူးယစ်မောင်းနှင်ခြင်းတားမြစ်\nထောင် ၅နှစ်/ဒဏ်ကြေး ၁သန်း (၂၀၂၄ နိုဝင်ဘာမှ)", bn: "মদ্যপ সাইকেল নিষিদ্ধ\n৫ বছর/১০ লাখ ইয়েন (নভেম্বর ২০২৪ থেকে)" }, note: null },
        { jp: "スマホ・イヤホンしながら運転禁止\n懲役6か月・罰金10万円（2024年11月〜強化）", tr: { vi: "Cấm dùng điện thoại/tai nghe khi đi xe\n6 tháng / 100.000 yên (từ 11/2024)", id: "Dilarang ponsel/earphone saat berkendara\n6 bulan / 100.000 yen (Nov 2024)", en: "No phone/earphone while cycling\n6 months / ¥100K (from Nov 2024)", my: "ဖုန်း/နားကြပ်သုံးရင်း မောင်းနှင်ခြင်းတားမြစ်\nထောင် ၆လ/ဒဏ်ကြေး ၁သိန်း (၂၀၂၄ နိုဝင်ဘာမှ)", bn: "ফোন/ইয়ারফোন সহ সাইকেল নিষিদ্ধ\n৬ মাস/১ লাখ ইয়েন (নভেম্বর ২০২৪ থেকে)" }, note: null },
        { jp: "夜間はライトを点灯する（無灯火は違反）\nヘルメット着用（努力義務）", tr: { vi: "Bật đèn ban đêm (không đèn là vi phạm)\nĐội mũ bảo hiểm (nỗ lực)", id: "Lampu malam (tanpa lampu = pelanggaran)\nPakai helm (upaya)", en: "Lights at night (no light = violation)\nWear helmet (effort obligation)", my: "ညဘက် မီးထွန်းပါ (မထွန်းခြင်း ချိုးဖောက်မှု)\nဦးထုပ်ဆောင်းပါ (ကြိုးပမ်းမှုတာဝန်)", bn: "রাতে লাইট জ্বালুন (না থাকা নিয়ম লঙ্ঘন)\nহেলমেট পরুন (প্রচেষ্টার বাধ্যবাধকতা)" }, note: null },
      ]
    },
    {
      id: "security", cat: "security", icon: "🔒",
      title: { ja: "情報セキュリティ・コンプライアンス", vi: "Bảo mật & tuân thủ", id: "Keamanan info & kepatuhan", en: "Info Security & Compliance", my: "သတင်းလုံခြုံရေးနှင့် လိုက်နာမှု", bn: "তথ্য নিরাপত্তা ও কমপ্লায়েন্স" },
      items: [
        { jp: "職場・製品の写真をSNSに投稿しない\n→ 法的責任を問われる場合あり", tr: { vi: "Không đăng ảnh nơi làm việc/sản phẩm lên MXH\n→ Có thể bị truy cứu pháp lý", id: "Jangan posting foto tempat kerja di medsos\n→ Dapat dikenai tanggung jawab hukum", en: "Don't post workplace/product photos on SNS\n→ May result in legal liability", my: "အလုပ်ခွင်/ထုတ်ကုန်ဓါတ်ပုံ SNS မတင်ပါနှင့်\n→ တရားဝင်တာဝန်ခံရနိုင်", bn: "কর্মক্ষেত্র/পণ্যের ছবি সোশ্যাল মিডিয়ায় নয়\n→ আইনি দায় হতে পারে" }, note: null },
        { jp: "ハラスメント・差別は絶対禁止\nパワハラ・セクハラ・いじめすべて禁止", tr: { vi: "Tuyệt đối cấm quấy rối và phân biệt đối xử", id: "Pelecehan dan diskriminasi sama sekali dilarang", en: "Harassment & discrimination absolutely prohibited", my: "နှောင့်ယှက်မှုနှင့် ခွဲခြားဆက်ဆံမှု တင်းကြပ်စွာ တားမြစ်", bn: "হয়রানি ও বৈষম্য সম্পূর্ণ নিষিদ্ধ" }, note: null },
      ]
    },
    {
      id: "workrules", cat: "work", icon: "💼",
      title: { ja: "職場のルール", vi: "Nội quy nơi làm việc", id: "Peraturan tempat kerja", en: "Workplace Rules", my: "အလုပ်ခွင်စည်းမျဉ်းများ", bn: "কর্মক্ষেত্রের নিয়ম" },
      items: [
        { jp: "飲酒しての出勤・作業は禁止\n→ 即解雇の対象", tr: { vi: "Cấm đến làm việc khi say → Sa thải ngay", id: "Dilarang bekerja mabuk → Pemecatan segera", en: "No working while drunk → Immediate dismissal", my: "မူးယစ်လျှက် အလုပ်တက်ခြင်း တားမြစ် → ချက်ချင်းထုတ်ပယ်", bn: "মদ্যপ অবস্থায় কাজ নিষিদ্ধ → তাৎক্ষণিক বরখাস্ত" }, note: null },
        { jp: "作業中はスマホ使用禁止\n清潔感のある服装で出勤する", tr: { vi: "Cấm dùng điện thoại khi làm việc\nĐến làm việc trang phục sạch sẽ", id: "Dilarang pakai ponsel saat bekerja\nHadir dengan pakaian bersih", en: "No smartphone during work\nCome in clean neat clothing", my: "အလုပ်လုပ်နေစဉ် ဖုန်းသုံးခြင်း တားမြစ်\nသန့်ရှင်းသပ်ရပ်သောအဝတ်ဖြင့် အလုပ်တက်ပါ", bn: "কাজের সময় স্মার্টফোন নিষিদ্ধ\nপরিষ্কার পোশাকে কাজে আসুন" }, note: null },
      ]
    },
    {
      id: "custom", cat: "custom", icon: "⚙️",
      title: { ja: "会社・現場のルール（カスタム）", vi: "Nội quy công ty / hiện trường", id: "Aturan perusahaan / lokasi", en: "Company / Site Rules", my: "ကုမ္ပဏီ/လုပ်ငန်းခွင်စည်းမျဉ်း", bn: "কোম্পানি/সাইটের নিয়ম" },
      items: [
        { jp: "御社のルールをここに追加できます\nお問い合わせ：トクシントラスト 羽根\n080-8374-1036", tr: { vi: "Có thể thêm nội quy công ty vào đây\nLiên hệ: Tokushin Trust - Hane\n080-8374-1036", id: "Peraturan perusahaan dapat ditambahkan\nHubungi: Tokushin Trust - Hane\n080-8374-1036", en: "Your company rules can be added here\nContact: Tokushin Trust - Hane\n080-8374-1036", my: "ကုမ္ပဏီစည်းမျဉ်းများ ထည့်နိုင်သည်\nဆက်သွယ်ရန်: Tokushin Trust - Hane\n080-8374-1036", bn: "কোম্পানির নিয়ম যোগ করা যাবে\nযোগাযোগ: Tokushin Trust - Hane\n080-8374-1036" }, note: null },
      ]
    }
  ]
};
