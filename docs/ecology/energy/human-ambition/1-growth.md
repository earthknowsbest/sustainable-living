# Tăng trưởng theo cấp số nhân (*Exponential Growth*)

Bên cạnh việc sở hữu nhiều điểm mạnh nổi bật, con người chúng ta cũng có những điểm yếu chí mạng. Một trong số đó có lẽ là sự thấu hiểu về những hệ quả của cái gọi là **tăng trưởng theo cấp số nhân** (*exponential growth*). [^1] Trớ trêu thay, những mục tiêu kinh tế chính trị của chúng ta thường hướng đến việc hỗ trợ tăng trưởng kinh tế. Do sự kì vọng và ham muốn tăng tưởng không ngừng đã ăn sâu vào tư duy xã hội, việc khảo sát kĩ lưỡng về hiện tượng này là một điều hệ trọng, nhằm tránh cho chúng ta những sai lầm căn bản về nhận thức. Trong chương này, chúng ta cùng tìm hiểu bản chất chung của tăng trưởng theo cấp số nhân, để nắm được tính bất khả thi và những hệ quả vô lí của việc tiếp diễn tăng trưởng từ năm này sang năm khác. Kết quả cho thấy kết cấu xã hội của chúng ta (dựa trên tăng trưởng) sớm muộn gì cũng phải đối mặt với những biến cố đáng kể so với hiện tại cuộc sống chúng ta đang trải nghiệm - một điều cần hết sức lưu tâm.[^2] Các chương sau sẽ tập trung vào những ứng dụng về kinh tế và tăng trưởng dân số - bao gồm đường tăng trưởng hàm logistic, và sau đó nhấn mạnh đến những giới hạn (*limits*) mà hành tinh hữu hạn (*finite planet*) của chúng ta có thể chịu đựng.

[^1]:
    ... cảm ơn Al Bartlett đã nỗ lực nâng cao sự nhân thức về tăng trưởng hàm số mũ

[^2]:
    Chúng ta có thể đọc thêm về hệ quả và tóm tắt ở phần cuối mỗi chương

## Vi khuẩn trong hũ

Một trong những đặc điểm quan trọng của tăng trưởng theo hàm số mũ: **thời gian cần thiết để nhân đôi** (*doubling time*) là một hằng số (*constant*) (1). 
 
??? question "Lưu ý"
    
    Bất kì kiểu tăng trưởng nào, dù chậm đến đâu, cũng có thể được biểu diễn bằng thời gian nhân đôi, ngay cả khi không có số lần nhân đôi cụ thể.

Một khái niệm quan trọng và thuận tiện chúng ta sẽ sử dùng thường xuyên trong chương này là **qui luật 70**:

!!! info "Định nghĩa 1.1: Qui luật 70" 

    Thời gian cần thiết để nhân đôi được liên hệ với tỉ lệ phần trăm tăng trưởng bằng công thức lấy 70 chia cho tỉ lệ phần trăm ấy. Ví dụ, 1% tăng tưởng sẽ nhân đôi giá trị thực qua 70 năm, trong khi với tỉ lệ 2%, thời gian ấy à 35 năm, và với 10% là 7 năm. Điều này cũng đúng với những khung thời gian khác: nếu những ca nhiễm bệnh trong một đại dịch tăng trưởng với mức độ 3,5% một ngày, số ca bệnh sẽ gấp đôi trong vòng 20 ngày.

Chúng ta sẽ thấy qui luật 70 xuất hiện trong toán học như thế nào vào cuối chương này. Nhưng trước hết, việc thấu hiểu về hệ quả (*consequences*) của nó thực chất quan trọng hơn. Để giản tiện, lấy ví dụ một thị trấn gấp đôi dân số của mình mỗi 10 năm (hay theo qui luật 70, chúng ta có tỉ lệ tăng dân số là 7%/năm). Bắt đầu vào năm 1900 với 100 cư dân, chúng ta kì vọng dân số sẽ là 200 người vào năm 1910, 400 người vào năm 1920, 800 người vào năm 1930, và sau đó đạt đến ngưỡng 100.000 người vào năm 2000 (xem bảng 1.1). Nếu giữ nguyên tỉ lệ tăng trưởng này, dân số thị trấn sẽ bằng với dân số thế giới chỉ sau 260 năm từ khi bắt đầu theo ví dụ trên.

Nhưng hãy cùng khám phá một ví dụ làm nổi bật trực giác sai lầm của chúng ta đối với tăng trưởng theo cấp số nhân. Ở đây có một hũ thủy tinh chứa nhiều chất dinh dưỡng, chúng ta cho thêm vi khuẩn với số lượng chính xác sao cho mỗi lần vi khuẩn nhân đôi diễn ra sau 10 phút, và hũ này sẽ chứa đầy vi khuẩn sau đúng 24 giờ. Thí nghiệm này bắt đầu từ lúc nửa đêm. Câu hỏi: vào lúc nào thì hũ này sẽ đầy một nửa?

Hãy dành khoảng một phút suy nghĩ. Trực giác thông thường mách bảo: hũ này sẽ đầy một nửa vào giữa trưa hôm sau - bằng một nửa tổng thời gian thí nghiệm. Nhưng sẽ thế nào khi chúng ta giải quyết bài toán ngược lại từ lúc đầy? Hũ sẽ đầy vào nửa đêm hôm sau, và thời gian nhân đôi là 10 phút. Vậy khi nào hũ sẽ đầy một nửa?

Câu trả lời: chúng ta chỉ cần bớt đi một lần thời gian nhân đôi, hay 11 giờ 50 phút đêm. Hình 1.1. biểu diễn câu chuyện này. Vào lúc 11h đêm, hũ chỉ đầy 1/64 dung tích thực, hay 1,7%. Vậy thì, trong 23h đầu tiên của 24h thí nghiệm, hũ này gần như trống không. Tất cả những hoạt động chỉ diễn ra vào thời điểm cuối, với tốc độ chóng mặt. 

Hình 1.1: 90 phút cuối trong quá trình vi khuẩn (phần màu xanh) phát triển trong hũ, nhân đôi mỗi 10 phút. Gần như chẳng có gì rõ rệt trong 22,5 giờ đầu tiên. Hãy chú ý đường dâng lên của vi khuẩn đã vẽ lên đồ thị của một hàm số mũ.

Giờ hãy cùng tưởng tượng một tình huống khác cũng với hũ vi khuẩn. Thời gian là 11 giờ 30 phút tối hôm sau, hay nửa giờ trước khi kết thúc thí nghiệm. Hũ lúc này đầy 1/8 vi khuẩn. Những người thận trọng và biết lo xa trong dự án nuôi cấy vi khuẩn này khi dự đoán về tương lai, quyết định rằng cần tìm thêm những hũ trống chứa đầy dinh dưỡng trong thời gian ngắn để vi khuẩn có thể tiếp tục sinh trưởng với tốc độ cũ. Nhưng hãy thử hình dung và đồng cảm với sự khó tin của nhiều người khác cùng trong dự án: hũ còn lâu mới đầy, và vi khuẩn trong đó đã sinh trưởng qua 141 thế hệ (lần nhân đôi) - một khoảng thời gian dường như vô tận. Tuy nhiên, một người trở về thông báo đã tìm ra được thêm ba hũ trống đựng dinh dưỡng tương tự. Thật đáng hoan nghênh người hùng đó! Vậy sự sinh trưởng của vi khuẩn sẽ tiếp diễn trong bao lâu? Câu trả lời của bạn như thế nào?

Dân số vi khuẩn sẽ gấp đôi trong 10 phút. Nếu hũ ban đầu đã đầy lúc 12 giờ đêm, dân số đó lại gấp đôi sau 10 phút, lấp đầy chiếc hũ thứ hai lúc 12 giờ 10 phút. Lần gấp đôi tiếp theo lấp đầy cả 4 hũ bao gồm 3 hũ mới vào lúc 12 giờ 20 phút. Sự tưởng thưởng cho người tìm ra 3 hũ mới thật là ngắn ngủi.

Giờ chúng ta có thể hiểu những viễn cảnh tương tự. Một hành tinh đã nuôi dưỡng chúng ta qua không biết bao nhiêu thế hệ, và có vẻ việc này sẽ tiếp diễn vô hạn, khiến cho viễn cảnh chạm đến một giới hạn nào đó thật khó hình dung. Chúng đã “đầy” một nửa? Hay một phần tư? hay một phần tám? Cả ba lựa chọn này đều đáng sợ, ở những mức độ khác nhau. Với tỉ lệ tăng trưởng 2% một năm (tài nguyên sử dụng), thời gian nhân đôi là 35 năm, và chúng ta chỉ có khoảng một thế kỉ, ngay cả khi hiện tại chúng ta chỉ sử dụng 1/8 lượng tài nguyên, để tiêu thụ toàn bộ lượng tài nguyên ấy.

Từ ví dụ vi khuẩn, chúng ta đã khám phá ra nhiều điều. Chúng ta không có thêm hũ nào nữa. Thêm một hành tinh (sao hỏa) có thể ứng với thêm một hũ. Nhưng nó không tương thích với cuộc sống con người, không có thực phẩm, và ở khá xa. Chúng ta cũng chẳng có thêm bất kì một trạm tiếp tế nào. Và ngay cả khi vượt qua những khó khăn thực tế đó, một hành tinh thứ hai sẽ mua được bao nhiều thời gian với việc tăng trưởng không ngừng? 35 năm nữa chăng với mức tăng trưởng 2% một năm ?

### 1.1.1 Tăng trưởng cấp số nhân theo toán học

!!! note "Box 1.1: Lời khuyên khi đọc công thức toán"
    Đây là là một trong những phần chứa nhiều công thức toán phức tạp nhất trong cuốn sách. Nhưng đừng để điều đó gây khó khăn cho bạn, mà cứ từ từ xem xét cẩn thận. Bạn chỉ cần nhận diện tăng trưởng theo cấp số nhân tuân theo một số quy luật không đổi, được trình bày chỉ trong vài trang sách. Đọc đi đọc lại phần này nhiều lần sẽ giúp bạn hiểu được rõ hơn nội dung được trình bày. Những công thức chỉ là những câu ngắn gọn giúp thâu tóm nội dung khái niệm. Nên thay vì chỉ đọc và sử dụng những công thức, tốt hơn bạn cần hiểu ý nghĩa của chúng và lí do tại sao chúng được sử dụng. Theo đó, dù sách được trình bày theo kết cấu cả câu văn và công thức đan xen, một tư tưởng xuyên suốt được phát triển qua cả hai thứ ngôn ngữ này. Phần Giới thiệu sẽ làm rõ hơn nội dung trong chương này, và phần Phụ lục A nhắc bạn về toán học căn bản.

Nhưng chuyên gia thường đọc các đoạn văn có nội dung khó hiểu nhiều lần trước khi thực sự hiểu. Có lẽ đó do thói quen bình tĩnh đó giúp họ trở thành chuyên gia!

Note: 5 Không giống như từ ngữ hay ngôn ngữ, các kí hiệu toán học dùng trong các phương trình chỉ là những nhãn hiệu và không có ý nghĩa thực chất - vì thế sử dụng kí hiệu x, n, t, b, M, v.v phản ánh những lựa chọn nhất định nào đó và có thể được thay thế bởi các kí hiệu khác, để mô tả cùng một khái niệm một cách nhất quán. Nội dung của công thức toán học thực chất nằm ở cấu trúc của phương trình, công thức đó.

Đặc điểm chủ yếu của tăng trưởng theo cấp số nhân: sự tăng trưởng được hình thành theo lũy thừa một cơ số nào đó và số mũ là đơn vị khoảng thời gian. Theo thời gian nhân đôi, chúng ta bắt đầu với 1x (1 lần), mức băn bản, tiếp theo đến 2x, rồi 4x, 8x, v.v… Với mỗi khoảng thời gian, chúng ta nhân với 2 (cơ số). Ví dụ, sau 5 khoảng thời gian, chúng ta có 2 x 2 x 2 x 2 x 2, hay 25 = 32. Một cách tổng quát, sau n lần nhân đôi, chúng ta đã nhân lên với 2n lần, với 2 là cơ số, n là số lần nhân đôi. Công thức được tổng quát như sau:

M = 2n = 2t/t2, (1.1)

với M là số nhân, t là tổng thời gian, và t2 là kí hiệu chỉ thời gian để nhân đôi - nên n = t / t2 tương đương số lần nhân đôi.

Box 1.2: Ví dụ Lãi suất
Qui trình tương tự diễn ra trong một tài khoản ngân hàng có tính lãi suất gộp (ví dụ tài khoản tiền gửi tiết kiệm tính lãi kép, lãi suất dùng để tiết kiệm thay vì rút ra hàng năm). Cho rằng bạn gửi $100 vào trong ngân hàng với lãi suất 2% một năm. Vào cuối năm đầu tiên, bạn sẽ có $102, hay 1,02 lần tiền gửi ban đầu. Năm tiếp theo, đó là 1,02 lần nhân với $102, hay $104,04, tương đương $100 nhân với 1,02 x 1,02. Sau ba năm, số tiền trở thành $106,18, hay $100 nhân với 1,023. Theo qui luật này, sau 35 năm, số tiền tiết kiệm sẽ là $100 nhân 1,0235, tương đương gần $199,99. Để ý rằng thời gian nhân đôi trong 35 năm với 2% lãi suất tuân theo qui luật 70. Bảng 1.2 tóm tắt ví dụ này.

Dù là nhân đôi, hay nhân với một số lãi suất hàng năm như trong Box 1.2, chúng ta đều nhân với một cơ số hết lần này đến lần khác. Điều này tương đương với việc lũy thừa một cơ số với một số mũ nào đó-số mũ chính là số lần chúng ta cấp số nhân cơ số lên. Từ đó, nếu gọi cơ số là b và số lần nhân lên là n, chúng ta có:


M = bn. (1.2)

Có một thủ thuật toán học giúp chúng ta dễ giải quyết các khía cạnh của tăng trưởng. Cấp số nhân và logarit tự nhiên là hàm nghịch của nhau. Do đó ln(ex) = x và elnx = x. Dùng thủ thuật: 2 = eln2, hay với bất kì cơ số nào: b = eln b. Với trường hợp đặc biệt khi b = 2 (nhân đôi), chúng ta có:

(1.3)

 Khi chúng ta bắt đầu với phương trình 1.1, được biểu diễn với cơ số 2, sau đó áp dụng qui tắc lũy thừa của lũy thừa với cùng cơ số. Sử dụng thủ thuật này, chúng ta có thể dùng bất kì lũy thừa một cơ số nào, như bx thành một phương trình lũy thừa, ex ln b, từ đó chuyển đổi bất kì hàm số mũ nào thành lũy thừa cớ số e ~ 2,7183. Biến đổi Phương trình 1.2 dưới dạng:

M = bn = en ln b. (1.4)

Nếu muốn tính số nhân M, chúng ta có thể lấy logarit tự nhiên hai vế:

ln M = n ln b

Vì thế, để tìm số lần nhân đôi n, chúng ta giải phương trình n = ln M / ln b.

6. Ví dụ, (53)4 tương đương (5 x 5 x 5)4 = (5 x 5 x 5) x (5 x 5 x 5) x (5 x 5 x 5) x (5 x 5 x 5), hay 12 nhân với cơ số 5, hay 512. Nên đơn giản chúng ta chỉ cần nhần 3 với 4 để có lũy thừa tương đương. Thường thường, chúng ta không cần ghi nhớ công thức toán: chỉ cần thử vài phép tính là có thể suy ra công thức.


Ví dụ 1.1.1. Thời gian để tăng gấp 1.000 lần (M=1000) với số nhân 1,07 (hay tỉ lệ tăng trưởng hàng năm là %; b = 1,07) là n = ln M / ln 1,07 = 102 năm.

Qui luật 70 được hình thành khi số nhân M có giá trị bằng 2. So sánh với công thức lãi suất kép (1+p)t, với p là lãi suất hàng năm (ví dụ: 0.02 hay 2%) và t là số năm tiết kiệm, phương trình 1.4 có thể được viết lại bằng cách thay b = 1+p và n = t. Theo phương trình 1.3, thời gian nhân đôi được trình bày dưới dạng:

1.6

từ đó, ln(1+p) = ln 2/t2 (cùng cơ số nên số mũ bằng nhau), và thời gian nhân đôi được tính bằng 

1.7

Với p nhận giá trị nhỏ (nhỏ hơn nhiều so với 1), logarit tự nhiên của 1+p xấp xỉ p. Theo đó, khi p = 0.02, ln 1.02 ~ 0.02 ~ p. Đây là một phần lí do chúng ta chọn e là cơ số, vì nó “tự nhiên” theo toán học. Vì ln2 ~ 0.693 ~ 0.7, nên thời gian nhân đôi, t2, xấp xỉ 70 chia cho tỉ lệ tăng trưởng hàng năm, p, tính theo phần trăm. Do đó ta gọi là qui luật 70 cho thời gian nhân đôi (mà không phải là 60 hay 80) căn bản vì cơ số logarit tự nhiên của 2 (nhân đôi) gần bằng 0.7.

Ví dụ 1.1.2 Để ôn lại toàn bộ, chúng ta hãy cùng nhau sử dụng ví dụ sau, với giả định tăng trưởng hàng năm là 5%.

Qui luật 70 (Định nghĩa 1.1.1) cho biết thời gian nhân đôi là 14 năm (70 / 5), vì thế chúng ta có thể định nghãi t2 trong phương trình 1.1, 1.3, 1.6, 1.7 là 14 năm. Tính toán chính xác từ phương trình 1.7 cho kết quả 14,2 năm. 

Để đánh giá mức độ tăng trưởng trong 10 năm, chúng ta có thể dùng Phương trình 1.1 với t = 10 và t2 = 14.2 để tính được M = 1.63, có nghĩa là tăng 63% kích thước so với ban đầu. Hay chúng ta cũng có thể áp dụng Phương trình 1.2 với b = 1,05 và n = 10 để ra cùng một kết quả. Chú ý rằng chúng ta có thể tự do lựa chọn cơ số 1,05 hay 2, và số lần cấp số nhân n tương ứng là 10 hay t / t2 = 0.04 để ra cùng một kết quả. Với dạng hàm số mũ cơ số e trong phương trình 1.4, với đôi b và n đều cho ra e0.488.

Nếu chúng ta muốn “làm ngược lại” và tính xem khi nào mức gia tăng gấp 3 lần ban đầu (M = 3),  chúng ta có thể dùng Phương trình 1.5 để tim ra n bằng 22,5 với b là 1,05 (hay 22,5 năm, do cơ số này tăng mỗi năm). Nếu dùng b = 2, chúng ta tính được n = 1.58, hay sự gia tăng 3 lần so với ban đầu sau 1,8 lần nhân đôi, hay 1,58 t2 = 22.5 years. Chúng ta có thể kiểm tra kết quả với Phương trình 1.6 bằng cách đặt t = 2.. và p = 0.05 hay t2 = 14.2.

## 1.2 Dự đoán tăng trưởng năng lượng theo hàm số mũ

Một khi thiết lập nguyên lí của tăng trưởng theo hàm số mũ, giờ là lúc chúng ta sử dụng toán học để chứng minh  những giới hạn có thể đạt được cho những kì vọng của mình. Chúng ta sẽ tập trung vào việc sử dụng năng lượng. Ban quản trị thông tin 
Do thiếu dữ liệu so sánh của thế giới, chúng ta sử dụng dữ liệu của Hoa Kỳ đơn giản để mô tả xu hướng toàn cầu. Ngay cả các quốc gia nghèo đang tăng trưởng năng lượng sử dụng- thường thường nhanh hơn mức 3% hàng năm của Hoa Kì theo lịch sử.

Năng lượng Hoa Kì (EIA) cung cấp thông tin về việc sử dụng năng lượng từ năm 1949 đến nay. Phụ lục (E1: [3]) trình bày ước tính năng lượng sử dụng từ năm 1635 đến 1945. Hình 1.2 hiển thị quá trình lịch sử gần đây hơn.

Figure 1.2: Năng lượng sử dụng ở Hoa Kỳ trong hơn 200 năm, cho thấy sự tăng trưởng nhanh chóng gần như phụ thuộc hoàn toàn vào nhiên liệu hóa thạch. Đường màu đỏ là đường phù hợp theo tăng trưởng hàm số mũ áp dụng vào dữ liệu trong Hình 1.3

Chú ý rằng tốc độ tăng trưởng năng lượng ở cạnh trái trong hình 1.2 đã trở nên rất nhỏ đến nỗi không đáng kể. Trình bày dữ liệu dưới dạng biểu đồ logarit, như Hình 1.3, chúng ta có thể hiểu rõ hơn toàn bộ quá trình phát triển năng lượng. Trong hình này, tăng trưởng đã trở thành những đường thẳng. Xu hướng này nhất quán một cách đáng ngạc nhiên với sự tăng trưởng hàm số mũ (đường màu đỏ) trong phần lớn lịch sử, với tốc độ gia tăng chỉ 3% một năm. Chú ý rằng hiệu ứng tổng quát này bao gồm cả sự gia tăng dân số, nhưng dân số không tăng nhanh bằng tốc độ tăng của năng lượng sử dụng, nên mức sử dụng năng lượng trên đầu người cũng tăng. Điều này khá hợp lí: cuộc sống hiện đại sử dụng nhiều năng lượng hơn nhiều so với trước đây, tính bình quân theo đầu người.