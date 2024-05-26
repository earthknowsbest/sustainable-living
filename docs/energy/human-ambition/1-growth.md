---
glightbox: false
---

# Chương 1: Tăng trưởng theo cấp số nhân (*Exponential Growth*)

![growth-0](../../assets/images/growth-0.webp)

!!! quote ""

    [Thiên hà Ngọc Phu](https://vi.wikipedia.org/wiki/Thi%C3%AAn_h%C3%A0_Ng%E1%BB%8Dc_Phu) (tên khác là NGC 253). Nguồn hình ảnh: Dylan O’Donnell.

Bên cạnh việc sở hữu nhiều điểm mạnh nổi bật, con người cũng có những điểm yếu chí mạng. Một trong số đó có lẽ là sự thiếu nhận thức đầy đủ về những hệ quả của cái gọi là **tăng trưởng theo cấp số nhân** (*exponential growth*)[^1]. Trớ trêu thay, những mục tiêu kinh tế chính trị của chúng ta thường hướng đến việc hỗ trợ tăng trưởng kinh tế. Do sự kì vọng và ham muốn tăng tưởng không ngừng đã ăn sâu vào tư duy xã hội, việc khảo sát kĩ lưỡng về hiện tượng này là một điều hệ trọng, nhằm tránh cho chúng ta những sai lầm căn bản về nhận thức. Trong chương này, chúng ta hãy cùng tìm hiểu bản chất chung của tăng trưởng theo cấp số nhân, để nắm được tính bất khả thi và những hệ quả vô lí của việc tiếp diễn tăng trưởng từ năm này sang năm khác. Kết quả cho thấy kết cấu xã hội của chúng ta (dựa trên tăng trưởng) sớm muộn gì cũng phải đối mặt với những biến cố đáng kể so với cuộc sống hiện tại&mdash;một điều cần hết sức lưu tâm[^2]. Các chương sau sẽ tập trung vào những ứng dụng về kinh tế và tăng trưởng dân số&mdash;bao gồm đường tăng trưởng hàm logistic, và sau đó nhấn mạnh đến **những giới hạn** (*limits*) mà **hành tinh hữu hạn** (*finite planet*) của chúng ta đặt ra.

[^1]:
    ... cảm ơn Al Bartlett đã nỗ lực nâng cao sự nhận thức cộng đồng về tăng trưởng hàm số mũ

[^2]:
    Chúng ta có thể đọc thêm phần Kết luận về hệ quả và tóm tắt ở phần cuối mỗi chương

## 1. Vi khuẩn trong hũ

Một trong những đặc điểm quan trọng của tăng trưởng theo hàm số mũ: **thời gian cần thiết để nhân đôi** (*doubling time*) là một **hằng số** (*constant*). 
 
???+ question "Lưu ý"
    
    Bất kì kiểu tăng trưởng nào, dù chậm đến đâu, cũng có thể được biểu diễn bằng thời gian nhân đôi, ngay cả khi không có số lần nhân đôi cụ thể.

Một khái niệm quan trọng và thuận tiện chúng ta sẽ sử dùng thường xuyên trong chương này là **qui luật** $\textbf{70}$:

!!! abstract "Định nghĩa $\textbf{1.1}$: Qui luật $\textbf{70}$" 

    Thời gian cần thiết để nhân đôi được liên hệ với tỉ lệ phần trăm tăng trưởng bằng công thức lấy $70$ chia cho tỉ lệ phần trăm ấy. Ví dụ, $1\%$ tăng trưởng sẽ nhân đôi giá trị thực qua $70$ năm, trong khi với tỉ lệ $2\%$, thời gian ấy à $35$ năm, và với $10\%$ là $7$ năm. Điều này cũng đúng với những khung thời gian khác: nếu những ca nhiễm bệnh trong một đại dịch tăng trưởng với mức độ $3{,}5\%$ một ngày, số ca bệnh sẽ gấp đôi trong vòng $20$ ngày.

Chúng ta sẽ thấy qui luật $70$ xuất hiện trong toán học như thế nào vào cuối chương này. Nhưng trước tiên, quan trọng hơn là chúng ta thấu hiểu về **hệ quả** (*consequences*) của nó. Để giản tiện, lấy ví dụ một thị trấn gấp đôi dân số của mình mỗi $10$ năm (hay theo qui luật $70$, chúng ta có tỉ lệ tăng dân số là $7\%$/năm). Bắt đầu vào năm $1900$ với $100$ cư dân, chúng ta kì vọng dân số sẽ là $200$ người vào năm $1910$, $400$ người vào năm $1920$, $800$ người vào năm $1930$, và sau đó đạt đến ngưỡng $100.000$ người vào năm $2000$ (xem **Bảng** $\textbf{1.1}$). Nếu giữ nguyên tỉ lệ tăng trưởng này, dân số thị trấn sẽ bằng với dân số thế giới chỉ sau $260$ năm từ khi bắt đầu theo ví dụ trên.

<div markdown="1" class="row-content">

!!! info "Bảng $\textbf{1.1}$. Ví dụ $7\%$ tăng trưởng hàng năm"
    
    Chỉ sau $100$ năm, dân số đã tăng gấp hơn $1.000$ lần so với ban đầu. 

| Năm  | Dân số  |
| :--: | :-----: |
| 1900 | 100     |
| 1910 | 200     |
| 1920 | 400     |
| 1930 | 800     |
| 1940 | 1600    |
| &#8286;  | &#8286; |
| 2000 | 102.400 |

</div>

Hãy cùng khám phá một ví dụ làm nổi bật trực giác sai lầm của chúng ta đối với tăng trưởng theo cấp số nhân. Ở đây có một hũ thủy tinh chứa nhiều chất dinh dưỡng, chúng ta cho thêm vi khuẩn với số lượng chính xác sao cho mỗi lần vi khuẩn nhân đôi diễn ra sau $10$ phút, và hũ này sẽ chứa đầy vi khuẩn sau đúng $24$ giờ. Thí nghiệm này bắt đầu từ lúc nửa đêm. Câu hỏi: vào lúc nào thì hũ này sẽ đầy một nửa?

!!! tip ""

    Số lượng vi khuẩn nhân đôi trong mỗi $10$ phút chỉ là một ví dụ, trong thực tế có thể là $20-30$ phút.

Hãy dành khoảng một phút suy nghĩ. Trực giác thông thường mách bảo: hũ này sẽ đầy một nửa vào giữa trưa hôm sau&mdash;bằng một nửa tổng thời gian thí nghiệm. Nhưng sẽ thế nào khi chúng ta giải quyết bài toán ngược lại từ lúc đầy? Hũ sẽ đầy vào nửa đêm hôm sau, và thời gian nhân đôi là $10$ phút. Vậy khi nào hũ sẽ đầy một nửa?

Câu trả lời: chúng ta chỉ cần bớt đi một lần thời gian nhân đôi, hay $11$ giờ $50$ phút đêm. **Hình** $\textbf{1.1}$ biểu diễn câu chuyện này. Vào lúc $11$ giờ đêm, hũ chỉ đầy $1/64$ dung tích thực, hay $1{,}7\%$. Vậy thì, trong $23$ giờ đầu tiên của $24$ giờ thí nghiệm, hũ này gần như trống không. Tất cả những hoạt động chỉ diễn ra vào thời điểm cuối, với tốc độ chóng mặt. 

![Bacteria-Light](../../assets/images/bacteria-light.svg#only-light)
![Bacteria-Dark](../../assets/images/bacteria-dark.svg#only-dark)


> **Hình** $\textbf{1.1}$: <i>$\textit{90}$ phút cuối trong quá trình vi khuẩn (phần màu xanh) phát triển trong hũ, nhân đôi mỗi $\textit{10}$ phút. Gần như chẳng có gì rõ rệt trong $\textit{22,5}$ giờ đầu tiên. Hãy chú ý đường dâng lên của vi khuẩn đã vẽ lên đồ thị của một hàm số mũ.</i>

Giờ hãy cùng tưởng tượng một tình huống khác cũng với hũ vi khuẩn. Thời gian là $11$ giờ $30$ phút tối hôm sau, hay nửa giờ trước khi kết thúc thí nghiệm. Hũ lúc này đầy $1/8$ vi khuẩn. Những người thận trọng và biết lo xa trong dự án nuôi cấy vi khuẩn này khi dự đoán về tương lai, quyết định rằng cần tìm thêm những hũ trống chứa đầy dinh dưỡng trong thời gian ngắn để vi khuẩn có thể tiếp tục sinh trưởng với tốc độ cũ. Nhưng hãy thử hình dung và đồng cảm với sự khó tin của nhiều người khác cùng trong dự án: hũ còn lâu mới đầy, và vi khuẩn trong đó đã sinh trưởng qua $141$ thế hệ (hay số lần nhân đôi)&mdash;một khoảng thời gian dường như vô tận. Tuy nhiên, một người trở về thông báo đã tìm ra được thêm ba hũ trống đựng dinh dưỡng tương tự. Thật đáng hoan nghênh người hùng đó! Vậy sự sinh trưởng của vi khuẩn sẽ tiếp diễn trong bao lâu? Câu trả lời của bạn như thế nào?

Dân số vi khuẩn sẽ gấp đôi trong $10$ phút. Nếu hũ ban đầu đã đầy lúc $12$ giờ đêm, dân số đó lại gấp đôi sau $10$ phút, lấp đầy chiếc hũ thứ hai lúc $12$ giờ $10$ phút. Lần gấp đôi tiếp theo lấp đầy cả $4$ hũ bao gồm $3$ hũ mới vào lúc $12$ giờ $20$ phút. Sự tưởng thưởng cho người tìm ra $3$ hũ mới thật là ngắn ngủi.

Giờ chúng ta có thể hiểu những viễn cảnh tương tự. Một hành tinh đã nuôi dưỡng chúng ta qua không biết bao nhiêu thế hệ, và có vẻ việc này sẽ tiếp diễn vô hạn, khiến cho viễn cảnh chạm đến một giới hạn nào đó thật khó hình dung. Chúng đã “đầy” một nửa? Hay một phần tư? hay một phần tám? Cả ba lựa chọn này đều đáng sợ, ở những mức độ khác nhau. Với tỉ lệ tăng trưởng $2\%$ một năm (tài nguyên sử dụng), thời gian nhân đôi là $35$ năm, và chúng ta chỉ có khoảng một thế kỉ, ngay cả khi hiện tại chúng ta chỉ sử dụng $1/8$ lượng tài nguyên, để tiêu thụ toàn bộ lượng tài nguyên ấy.

!!! tip ""

    Nếu hiện tại chúng ta ở mức $1/8$ và nhân đôi sau mỗi $35$ năm, chúng ta sẽ ở mức $1/4$ sau $35$ năm, $1/2$ sau $70$ năm, và đầy trong $105$ năm. 

Từ ví dụ vi khuẩn, chúng ta đã khám phá ra nhiều điều. Chúng ta không có thêm hũ nào nữa (Chương $4$ sẽ trả lời cho hiện thực về du hành không gian). Thêm một hành tinh, như sao hỏa, có thể ứng với việc có thêm một hũ. Nhưng trên đó không thích hợp cho cuộc sống con người, không có thực phẩm, và lại ở khá xa. Chúng ta cũng chẳng có thêm bất kì một trạm tiếp tế nào. Và ngay cả khi vượt qua muôn vàn khó khăn thực tế đó, một hành tinh thứ hai sẽ mua được cho chúng ta bao nhiều thời gian với việc tăng trưởng không ngừng? 35 năm nữa chăng với mức tăng trưởng $2\%$ một năm?

### Tăng trưởng cấp số nhân theo toán học

!!! note "Hộp $\textbf{1.1}$: Lời khuyên khi đọc công thức toán"
    Đây là một trong những chương chứa nhiều công thức toán phức tạp nhất trong cuốn sách. Nhưng đừng để điều đó gây khó khăn cho bạn, mà hãy từ từ xem xét cẩn thận. Bạn chỉ cần nhận diện tăng trưởng theo cấp số nhân tuân theo một số quy luật không đổi, được trình bày chỉ trong vài trang sách. Đọc đi đọc lại phần này nhiều lần sẽ giúp bạn hiểu được rõ hơn nội dung được trình bày. Những công thức chỉ là những câu ngắn gọn giúp thâu tóm nội dung khái niệm. Nên thay vì chỉ đọc và sử dụng những công thức, tốt hơn bạn cần hiểu ý nghĩa của chúng và lí do tại sao chúng được sử dụng. Theo đó, dù sách được trình bày theo kết cấu cả câu văn và công thức đan xen, một tư tưởng xuyên suốt được phát triển qua cả hai thứ ngôn ngữ này. Phần Giới thiệu sẽ làm rõ hơn nội dung trong chương này, và phần Phụ lục A nhắc bạn về toán học căn bản.

!!! tip ""

    Những chuyên gia thường đọc các đoạn văn bản có nội dung khó hiểu nhiều lần trước khi thực sự hiểu. Có lẽ thói quen bình tĩnh đó giúp họ trở thành chuyên gia!

??? question "Lưu ý"

    Không giống như từ ngữ hay ngôn ngữ, các kí hiệu toán học dùng trong các phương trình chỉ là những nhãn hiệu và không có ý nghĩa thực chất&mdash;vì thế sử dụng kí hiệu $\pmb{x}$, $\pmb{n}$, $\pmb{t}$, $\pmb{b}$, $\pmb{M}$, v.v. phản ánh những lựa chọn nhất định nào đó và có thể được thay thế bởi các kí hiệu khác, để mô tả cùng một khái niệm một cách nhất quán. Nội dung của công thức toán học thực chất nằm ở cấu trúc của phương trình, công thức đó.

Đặc điểm chủ yếu của tăng trưởng theo cấp số nhân: sự tăng trưởng được hình thành theo lũy thừa một cơ số nào đó và số mũ là đơn vị khoảng thời gian. Theo thời gian nhân đôi, chúng ta bắt đầu với $1\times$ ($1$ lần), mức băn bản, tiếp theo đến $2\times$, rồi $4\times$, $8\times$, v.v. Với mỗi khoảng thời gian, chúng ta nhân với $2$ (cơ số). Ví dụ, sau $5$ khoảng thời gian, chúng ta có $2 \times 2 \times 2\times 2 \times 2$, hay $2^5= 32$. Một cách tổng quát, sau n lần nhân đôi, chúng ta đã nhân lên với $2^n$ lần, với $2$ là cơ số, $n$ là số lần nhân đôi. Công thức được tổng quát như sau:

$$
M = 2^n = 2^{t/t_2}, \tag{1.1}\label{1.1}
$$

với M là số nhân, $t$ là tổng thời gian, và $t_2$ là kí hiệu chỉ thời gian để nhân đôi&mdash;nên $n = t / t_2$ tương đương số lần nhân đôi.

!!! tip ""
    
    Ví dụ, thời gian nhân đôi có $M = 2$, nhân ba có $M = 3$, và khi tăng $29\%$ có nghĩa là $M = 1{,}29$

!!! note "**Hộp** $\textbf{1.2}$: Ví dụ Lãi suất"
    
    Qui trình tương tự diễn ra trong một tài khoản ngân hàng có tính lãi suất gộp (tài khoản tiền gửi tiết kiệm tính lãi kép, lãi suất dùng để tiết kiệm thay vì rút ra hàng năm). Cho rằng bạn gửi $\$100$ vào trong ngân hàng với lãi suất $2\%$ một năm. Vào cuối năm đầu tiên, bạn sẽ có $\$102$, hay $1{,}02$ lần tiền gửi ban đầu. Năm tiếp theo, đó là $1{,}02$ lần nhân với $\$102$, hay $\$104{,}04$, tương đương $\$100$ nhân với $1{,}02 \times 1{,}02$. Sau ba năm, số tiền trở thành $\$106{,}18$, hay $\$100$ nhân với $1{,}023$. Theo qui luật này, sau $35$ năm, số tiền tiết kiệm sẽ là $\$100$ nhân $1{,}02^{35}$, tương đương gần $\$199{,}99$. Để ý rằng thời gian nhân đôi trong $35$ năm với $2\%$ lãi suất tuân theo qui luật $70$. **Bảng** $\textbf{1.2}$ tóm tắt ví dụ này.

!!! info "Bảng $\textbf{1.2}$. Ví dụ Lãi suất"
    
     Biểu diễn mức tài khoản tiền gửi ngân hàng theo lãi suất kép $7\%$ một năm

<div markdown="1" align="center">
| Năm  | $\bf{b^n}$    | Dollars |
| :--: | :-----:   | :----: |
| 0    | $1{,}00$  | $\$100{,}00$ |
| 1    | $1{,}02$  | $\$102{,}00$ |
| 2    | $1{,}0404$ | $\$104{,}04$ |
| 3    | $1{,}0612$ | $\$106{,}12$ |
| &#8286; | &#8286; | &#8286; |
| 10   | $1{,}2190$ | $\$121{,}90$ 
| &#8286; | &#8286; | &#8286; |
| 25   | $1{,}9999$ | $\$199{,}99$ |
</div>

Dù là nhân đôi, hay nhân với một số lãi suất hàng năm như trong **Hộp $\textbf{1.2}$**, chúng ta đều nhân với một cơ số hết lần này đến lần khác. Điều này tương đương với việc lũy thừa một cơ số với một số mũ nào đó&mdash;số mũ chính là số lần chúng ta cấp số nhân cơ số lên. Từ đó, nếu gọi cơ số là $b$ và số lần nhân lên là $n$, chúng ta có:

$$
M = b^n \tag{1.2}\label{1.2}
$$

Có một thủ thuật toán học giúp chúng ta dễ giải quyết các khía cạnh của tăng trưởng. Cấp số nhân và logarit tự nhiên là hàm nghịch của nhau. Do đó $\ln{(e^x)} = x$ và $e^{\ln{x}} = x$. Dùng thủ thuật: $2 = e^{\ln{2}}$, hay với bất kì cơ số nào: $b = e^{\ln{b}}$. Với trường hợp đặc biệt khi $b = 2$ (nhân đôi), chúng ta có:

$$
M = 2^{t/t_2} = {(e^{\ln{2}})}^{t/t_2} = e^{t\ln{2}/t_2} \tag{1.3}\label{1.3}
$$

??? question "Giải thích" 
    
    ${(5^3)}^4$ tương đương $(5\times 5\times 5)^4$ $=$ $(5\times 5\times 5)$ $\times$ $(5\times 5\times 5)$ $\times$ $(5\times 5\times 5)$ $\times$ $(5\times 5\times 5)$, hay lũy thừa mũ $12$ với cơ số $5$, hay $5^{12}$. Nên đơn giản chúng ta chỉ cần nhần $3$ với $4$ để có lũy thừa tương đương. Thường thường, chúng ta không cần ghi nhớ công thức toán: chỉ cần thử vài phép tính là có thể suy ra công thức.

 Khi chúng ta bắt đầu với **Phương trình** $\eqref{1.1}$, được biểu diễn với cơ số $2$, sau đó áp dụng qui tắc lũy thừa của lũy thừa với cùng cơ số. Sử dụng thủ thuật này, chúng ta có thể biến bất kì lũy thừa một cơ số nào, như $b^x$ thành $e^{x\ln{b}}$, từ đó chuyển đổi bất kì hàm số mũ nào thành lũy thừa cơ số $e ≈ 2,7183$. Biến đổi **Phương trình** $\eqref{1.2}$ dưới dạng:

$$
M = b^n = e^{n\ln{b}} \tag{1.4}\label{1.4}
$$

Để tính số nhân M, chúng ta lấy logarit tự nhiên hai vế:

$$
\ln{M} = n\ln{b} \tag{1.5}\label{1.5}
$$

Vì thế, để tìm số lần nhân đôi $n$, chúng ta giải phương trình $n = \ln{M} / \ln {b}$.

!!! example "Ví dụ 1.1" 
    
    Thời gian để tăng gấp $1.000$ lần $(M = 1000)$ với số nhân $1{,}07$ (hay tỉ lệ tăng trưởng hàng năm là $7\%$; $b = 1{,}07$) là $n = \ln{M} / \ln{1{,}07} = 102$ năm.

Qui luật $70$ được hình thành khi số nhân M có giá trị bằng $2$. So sánh với công thức lãi suất kép $(1+p)^t$, với $p$ là lãi suất hàng năm (ví dụ: $0{,}02$ hay $2\%$) và $t$ là số năm tiết kiệm, **Phương trình** $\eqref{1.4}$ có thể được viết lại bằng cách thay $b = 1 + p$ và $n = t$. Theo **Phương trình** $\eqref{1.3}$, thời gian nhân đôi có thể được biểu diễn lại dưới dạng:

$$
M = {e^{t\ln(1 + p)}} = e^{t\ln{2}/t_2}\tag{1.6}\label{1.6}
$$

từ đó, $\ln(1+p) = \ln{2}/t_2$ (cùng cơ số nên số mũ bằng nhau), và thời gian nhân đôi được tính bằng: 

$$
t_2 = \ln{2} / \ln(1+p) \tag{1.7}\label{1.7}
$$

Với $p$ nhận giá trị nhỏ (nhỏ hơn nhiều so với $1$), logarit tự nhiên của $1 + p$ xấp xỉ bằng $p$. Theo đó, khi $p = 0{,}02$, thì $\ln{1{,}02} ≈ 0{,}02 ≈ p$. Đây là một phần lí do chúng ta chọn $e$ là cơ số, vì nó “tự nhiên” theo toán học. Vì $\ln{2} ≈ 0{,}693 ≈ 0{,}7$, nên thời gian nhân đôi, $t_2$, xấp xỉ bằng $70$ chia cho tỉ lệ tăng trưởng hàng năm, $p$, tính theo phần trăm. Do đó ta gọi là qui luật $70$ cho thời gian nhân đôi (mà không phải là $60$ hay $80$) căn bản vì logarit tự nhiên của $2$, hay $\ln{2}$, gần bằng $0{,}7$.

!!! example "**Ví dụ** $\textbf{1.2}$: Để ôn lại toàn bộ, chúng ta hãy cùng nhau sử dụng các phương trình trên, với giả định tăng trưởng hàng năm là 5%."

    Qui luật $70$ (**Định nghĩa** $\textbf{1.1})$ cho biết thời gian nhân đôi là $14$ năm ($70 / 5$), vì thế chúng ta có thể định nghĩa $t_2$ trong **Phương trình** $\eqref{1.1}$, $\eqref{1.3}$, $\eqref{1.6}$, $\eqref{1.7}$ là $14$ năm. Tính toán chính xác từ **Phương trình** $\eqref{1.7}$ cho kết quả $14{,}2$ năm. 

    Để đánh giá mức độ tăng trưởng trong $10$ năm, chúng ta có thể dùng **Phương trình** $\eqref{1.1}$ với $t = 10$ và $t_2 = 14{,}2$ để tính được $M = 1{,}63$, có nghĩa là tăng $63\%$ kích thước so với ban đầu. Hay chúng ta cũng có thể áp dụng **Phương trình** $\eqref{1.2}$ với $b = 1{,}05$ và $n = 10$ để ra cùng một kết quả. Chú ý rằng chúng ta có thể tự do lựa chọn cơ số $1{,}05$ hay $2$, và số lần cấp số nhân ($n$) tương ứng là $10$ hay $t / t_2 = 0{,}04$ để ra cùng một kết quả. Với dạng hàm số mũ cơ số $e$ trong **Phương trình** $\eqref{1.4}$, với cặp $b$ và $n$ đều cho ra $eˆ0.488$.

    Nếu chúng ta muốn  "giải ngược từ cuối" và tính xem khi nào mức tăng đạt gấp 3 lần ban đầu ($M = 3$),  chúng ta có thể dùng **Phương trình** $\eqref{1.5}$ để tìm ra $n$ bằng $22{,}5$ với $b$ là $1{,}05$ (hay $22{,}5$ năm, do cơ số này tăng mỗi năm). Nếu dùng $b = 2$, chúng ta tính được $n = 1.58$, hay gấp $3$ lần so với ban đầu sau $1{,}8$ lần nhân đôi, hay $1{,}58\times t_2 = 22{,}5$ năm. Chúng ta có thể kiểm tra kết quả với **Phương trình** $\eqref{1.6}$ bằng cách đặt $t = 22{,}5$ và $p = 0{,}05$ hay $t_2 = 14{,}2$.

## 2. Dự đoán tăng trưởng công suất năng lượng theo cấp số nhân

Một khi đã thiết lập được nguyên lí của tăng trưởng theo cấp số nhân, giờ là lúc chúng ta sử dụng toán học để dẫn chứng về những giới hạn mà kì vọng của chúng ta có thể đạt đến. Chúng ta sẽ tập trung vào việc sử dụng năng lượng. Ban quản trị thông tin Năng lượng Hoa Kì (EIA) cung cấp thông tin về việc sử dụng năng lượng từ năm 1949 đến nay. Phụ lục (E1: [3]) trình bày ước tính năng lượng sử dụng từ năm 1635 đến 1945. **Hình** $\textbf{1.2}$ hiển thị quá trình lịch sử gần đây hơn.

![US-Energy-Light](../../assets/images/energy-us-light.svg#only-light)
![US-Energy-Dark](../../assets/images/energy-us-dark.svg#only-dark)

> **Hình** $\textbf{1.2}$: <i>Năng lượng sử dụng ở Hoa Kỳ trong hơn 200 năm, cho thấy sự tăng trưởng nhanh chóng gần và như phụ thuộc hoàn toàn vào nhiên liệu hóa thạch. Đường màu đỏ là đường phù hợp theo tăng trưởng hàm số mũ áp dụng vào dữ liệu trong **Hình** $\textbf{1.3}$ bên dưới</i>

??? info "Lưu ý"
    
    Do thiếu dữ liệu so sánh của thế giới, chúng ta sử dụng dữ liệu của Hoa Kỳ đơn giản để mô tả xu hướng toàn cầu. Ngay cả việc sử dụng năng lượng các quốc gia nghèo cũng đang tăng trưởng nhanh chóng&mdash;thường nhanh hơn mức 3% hàng năm của Hoa Kì theo lịch sử.

Chú ý rằng tốc độ tăng trưởng sản lượng năng lượng ở cạnh trái trong **Hình** $\textbf{1.2}$ đã trở nên rất nhỏ đến nỗi không đáng kể (từ những năm $1800$ trở về trước). Trình bày dữ liệu dưới dạng biểu đồ logarit, như **Hình** $\textbf{1.3}$, chúng ta có thể hiểu rõ hơn toàn bộ quá trình phát triển năng lượng. Trong hình này, tăng trưởng đã trở thành những đường thẳng. Xu hướng này nhất quán một cách đáng ngạc nhiên với sự tăng trưởng hàm số mũ (đường màu đỏ) trong phần lớn lịch sử, với tốc độ gia tăng chỉ $3\%$ một năm. Chú ý rằng hiệu ứng tổng quát này bao gồm cả sự gia tăng dân số, nhưng dân số không tăng nhanh bằng tốc độ sản lượng năng lượng tăng, nên mức sử dụng năng lượng trên đầu người cũng tăng. Điều này khá hợp lí: cuộc sống hiện đại sử dụng nhiều năng lượng hơn nhiều so với trước đây, tính bình quân theo đầu người.

![US-Energy-Light](../../assets/images/energy-us-2-light.svg#only-light)
![US-Energy-Dark](../../assets/images/energy-us-2-dark.svg#only-dark)

> **Hình** $\textbf{1.3}$: <i>Quỹ đạo sản lượng năng lượng của Hoa Kì theo thời gian. Đường màu đỏ là đường hàm số mũ với tỉ lệ tăng trưởng $2{,}9\%$ một năm, được biểu diễn dưới dạng đường thẳng trên biểu đồ logarit trục tung.</i>

Chúng ta đã thiết lập được phương trình hàm số mũ dựa trên dữ liệu tăng trưởng trong quá khứ, hãy cùng xem xét các hệ quả về việc tiếp diễn xu hướng này trong tương lai. Bắt đầu với sản lượng năng lượng toàn cầu ở thời điểm hiện tại (năm $2020$) là $18\times10^{12}$ Watts ($18$ $TW$, hay TeraWatts), giả sử với mức tăng trưởng $2{,}3\%$ một năm. Chúng ta chọn mức tăng trưởng này bởi hai lí do: :one: mức tăng trưởng này nhỏ hơn một chút so với mức tăng trung bình trong lịch sử, nên nó không trở nên phi thức tế; :two: đây là con số thuận tiện cho việc tính toán với mức tăng gấp 10 lần mỗi thế kỉ.

??? info "Giải thích"

    Chúng ta chọn mức tăng trưởng này vì logarit tự nhiên của $10$ là $2{,}3\%$. Tương tự như việc sử dụng **Phương trình** $\eqref{1.7}$ với $10$ thay cho $2$ và $p = 0{,}023$ với mức tăng trưởng $2{,}3\%$ cho kết quả tăng gấp 10 lần sau khoảng thời gian $t_{10} ≈ 100$ năm.

Kết quả thu được theo tiến trình này thật sự đáng kinh ngạc, làm cho chúng ta hiểu sâu sắc hơn về hiện thực. Những khám phá lí thú về lí do khiến cho tăng trưởng không ngừng trở nên bất khả thi, đã loại bỏ dần những tương lai phi thực tế.

Mặt trời cung cấp năng lượng đến bề mặt Trái đất với sản lượng $1000$ $W/{m^2}$ ($1{,}000$ Watts mỗi mét vuông; chúng ta sẽ tìm hiểu sâu hơn về đơn vị này trong **Chương 5**). Bỏ qua hiệu ứng phản xạ của mây, diện tích hứng sáng của trái đất là $A = \pi{R_\oplus^2}$, với $R_\oplus^2$ là bán kính của Trái đất, khoảng $6{,}400$ km. Khoảng một phần tư bề mặt Trái đất là đất liền; cộng tất cả lại ta có khoảng $30\times10^{15}$ $W$ chiếu xuống mặt đất. Con số này gấp hơn $300$ lần sản lưởng điện tiêu thụ toàn cầu ($18$ $TW$). Thật là một con số choáng ngợp. Nếu tiếp tục tăng trưởng sản lượng năng lượng như hiện tại, sau một thế kỉ, chúng ta sẽ tiêu thụ gấp 10 lần, 100 lần chỉ sau hai thế kỉ, và chạm ngưỡng giới hạn (năng lượng khai thác từ mặt trời trên đất liền) chỉ sau $2{,}5$ thế kỉ ($250$ năm). Sau đó sẽ không còn tăng trưởng thêm được nữa.

Đợi một chút, tại sao không lắp tất cả các tấm pin mặt trời trên toàn bộ đại dương, và nâng cao hiệu suất tấm pin lên mức $100\%$ (theo một cách kì diệu nào đó)? Nếu làm được như thế, chúng ta sẽ “thu hoạch” được $130\times10^{15}$ $W$, gấp $7.000$ lần mức độ tiêu thụ hiện tại. Giờ đây, để chạm tới giới hạn chúng ta có 400 năm: mỗi lần gấp $10$ mức độ tiêu thụ năng lượng mất $100$ năm, với $7.000$ lần (hay khoảng $10^4$ lần), chúng ta sẽ cần chưa đến $100\times4$ năm, hay bốn thế kỉ.

Do đó, trong khoảng $400$ năm, chúng ta sẽ chạm tới giới hạn khai thác toàn bộ năng lượng mặt trời trên trái đất với hiệu suất $100\%$. Nhưng Trái đất cũng chỉ là một đốm nhỏ trong không gian. Tại sao chúng ta không thâu tóm “tất cả” năng lượng phát ra từ mặt trời, trong một bề mặt cầu (gọi là **mặt cầu Dyson**, xem **Hộp** $\textbf{1.3}$)? Giờ đây, chúng ta mới thực sự chiêm ngưỡng nguồn năng lượng khổng lồ! Mặt trời tỏa ra năng lượng $4\times{10^{26}}$ $W$. Nếu đây là bóng đèn, nó sẽ có nhãn hiệu này, thay vì con số “li ti” $100$ $W$. Thật khó hình dung con số lớn như vậy. Nhưng thực ra khá dễ hiểu theo toán học. (Toán học thực ra sẽ dễ hiểu hơn nếu bạn thử không quá chú ý đến tiểu tiết, mà chỉ quan tâm đến phần số mũ, hay lũy thừa. Trong trường hợp này, với mức tăng trưởng sản xuất năng lượng $2{,}3\%$, mỗi thế kỉ mức tiêu thụ tăng lên 10 lần). So với sản lượng của chúng ta hiện nay ($18\times{10^{12}}$$W$), sản lượng của mặt trời nhiều hơn khoảng $10^{14}$ lần. Nên sau $1.400$ năm ($14\times{10}$) (thực tế là khoảng $1.335$ năm, những hãy tạm bỏ qua tính chính xác đến hàng trăm), chúng ta sẽ đạt ngưỡng $18\times{10^{26}}$ $W$, hơn $4{,}5$ lần sản lượng của mặt trời. Từ đó suy ra, chúng ta sẽ sử dụng hết công suất của toàn bộ mặt trời phát ra trong khoảng thời gian ngắn hơn $2.000$ năm.   

!!! note "**Hộp** $\textbf{1.3}$: Xây dựng **Mặt cầu Dyson**"

    Nếu chúng ta lấy toàn bộ vật chất hình thành nên Trái đất, hay Sao Kim (<i>Venus</i>), và tạo ra một mặt cầu xung quanh mặt trời với khoảng cách bằng khoảng cách từ Trái đất đến Mặt trời, mặt cầu này sẽ chỉ dày $4$ $mm$! Tất nhiên, trong tất cả số vật chất này chỉ có một số hữu dụng để xây dựng mặt cầu bằng công nghệ cao và các tấm pin mặt trời. Toàn bộ bầu khí quyển của Trái đất nếu trải ra trên bề mặt này chỉ dày khoảng $0.015$ $m$. Có lẽ bạn không cần chờ đợi cho đến khi điều này xảy ra.  

Bỏ qua hiện thực nhàm chán, chúng ta nhận ra rằng mặt trời không phải là ngôi sao duy nhất trong dải Ngân Hà; trên thực tế, ước tính nó có tới $100$ tỉ ngôi sao! Một tỉ giây qua đi đã là hơn 30 năm, vì thế chẳng ai có thể đếm đến $100$ tỉ trong đời mình cả. Hãy cùng xem xét thêm: $100$ tỉ là $10^{11}$. Chúng ta biết ngay rằng mức tiêu thụ năng lượng $2{,}3\%$ có thể tiếp tục trong vòng $11$ thế kỉ nữa. Vậy nên để tiêu thụ toàn bộ công suất của tất cả các ngôi sao trong hệ ngân hà mất khoảng $1.100$ năm! Cộng với khoảng thời gian cần để tiêu thụ mặt trời, chúng ta cần tổng cộng $2.500$ năm, bằng một khoảng thời gian chúng ta đã xây dựng nên các nền văn minh trên thế giới. Ngay cả khi bỏ qua sự thực rằng dải ngân hà của chúng ta rộng khoảng $100.000$ năm ánh sáng, có nghĩa là trong $2.500$, việc khai thác năng lượng của tất cả các ngôi sao là bất khả thi. Từ ví dụ toán học này, ta có thể thấy thế giới vật lý đã đặt ra những giới hạn cho việc tăng trưởng tiêu thụ năng lượng của loài người.

!!! tip ""
    
    Một cách trùng hợp, vũ trụ nhìn thấy có số lượng thiên hà nhiều như số sao trong dải Ngân Hà của chúng ta. Vũ trụ “thấy được”, hay “quan sát được”, có nghĩa là mọi vật trong khoảng $13{,}8$ tỉ năm ánh sáng, quãng đường xa nhất mà ánh sáng có thể di chuyển được từ vụ nổ **Big Bang** 
    <!-- (xem thêm Phần D.1; trang 392). -->

Hãy tiếp tục với ví dụ trên với giả sử rằng chúng ta có thể thu hoạch tất cả năng lượng từ ánh sáng phát ra từ tất cả các ngôi sao trong tất cả các thiên hà trong vũ trụ quan sát được. Vũ trụ được nhìn thấy có khoảng $100$ tỉ thiên hà. Với mức tăng trưởng như cũ, ta sẽ có thêm $1.100$ năm. Xa hơn nữa, cho rằng chúng ta có khả năng chuyển đổi tất cả các vật chất trong vũ trụ (ngôi sao, khí gas và bụi) thành năng lượng thuần túy ($E = mc^2$), không chỉ là từ ánh sáng các ngôi sao, điều này sẽ chỉ kéo dài thêm trong 5.000 năm với tốc độ tăng trưởng $2{,}3\%$ một năm. Tăng trưởng hàm cấp số nhân có tác dụng ghê gớm như thế. **Bảng** $\textbf{1.3}$ tóm tắt kết quả của toàn bộ quá trình này.

<div markdown="1" class="row-content">

!!! info "Bảng 1.3. Giới hạn khai thác năng lượng"
    
    Năng lượng tiêu thụ bị giới hạn theo thang thời gian (số năm cho đến khi khai thác cạn kiệt).

| Khai thác                       |  #Năm  |
| :-----------------------------: | :------: |
| :octicons-sun-16::material-arrow-right-thin:đất liền, $20\%$ | 250      |
| :octicons-sun-16::material-arrow-right-thin::fontawesome-solid-earth-americas:, $100\%$   | 390      |
| Toàn bộ Mặt trời                | 1.400    |
| Toàn bộ Ngân Hà                 | 2.500    |
| Ánh sáng vũ trụ           | 3.600    |
| Vật chất vũ trụ           | 5.000    |

</div>

Những ví dụ đặt ra trên đây không phải là viễn cảnh chinh phục hệ mặt trời hay thiên hà để chúng ta nên hi vọng vào. Chúng được sử dụng như một bài tập về tư duy, làm nổi bật lên sự vô lí của quá trình tăng trưởng theo cấp số nhân nếu kéo dài mãi mãi. Tất cả các lí luận trên đây đã phủ nhận sự tăng trưởng sản lượng năng lượng không ngừng, bao gồm sự thật rằng dân số nhân loại sẽ không thể tăng mãi mãi trên hành tinh này. Chúng ta sẽ đề cập đễ viễn tưởng về khả năng loài người sống trên hành tinh khác vào **Chương 4**.   

## 3. Hệ quả theo nhiệt động học (*Thermodynamic Consequences*)

Vật lí tiếp tục đặt ra một giới nữa cho mức tăng trưởng: **nhiệt hao phí** (*waste heat*)[^3]. Gần như tất cả năng lượng chúng ta sử dụng cuối cùng sẽ chuyển hóa thành nhiệt năng. Nhiều hoạt động của con người vốn cần đến việc sản sinh nhiệt: bếp, lò nướng, lò sưởi, máy sấy, v.v. Ngay cả những thiết bị làm lạnh cũng tạo ra nhiệt.

[^3]:

    Tham khảo thêm trên [Wikipedia](https://vi.wikipedia.org/wiki/Nhi%E1%BB%87t_%C4%91%E1%BB%99ng_l%E1%BB%B1c_h%E1%BB%8Dc#)

!!! info ""

    Bạn có thể thử cảm nhận luồng gió phía sau máy điều hòa khi bật, hay nhiệt tỏa ra phía sau và phía dưới của tủ lạnh. Dù đây là những thiết bị làm lạnh, chúng tỏa ra nhiều nhiệt hơn là làm mát
    
Hầu hết các đồ vật tiêu thụ điện năng trong nhà đều thải nhiệt lượng ra môi trường xung quanh. Một chiếc xe hơi chạy trên đường đi từ A đến B, làm nóng động cơ và không khí xung quanh, tạo ra nhiệt trên má phanh và rô-tơ, trên lốp xe và trên đường. 
    
!!! info ""

    Không khí bị xe hơi làm xao động cuối cùng cũng dừng lại vì ma sát, trở thành nhiệt.
    
Năng lượng trao đổi chất trong cơ thể chúng ta phần lớn (khoảng $60\%$) dùng để duy trì nhiệt độ cơ thể. Ngay cả những hoạt động thể chất của chúng ta cuối cùng cũng tạo ra nhiệt trong môi trường xung quanh. Chỉ có một vài ngoài lệ: những tia năng lượng chiếu ra ngoài trái đất (như ánh sáng và radio) hay năng lượng được lưu trữ (như pin) (để rồi cũng chuyển hóa thành nhiệt năng). Những ngoại lệ này quả thực chẳng có gì đáng kể.

Điều gì sẽ xảy ra với toàn bộ nhiệt hao phí này? Nếu năng lượng đó ở nguyên trên Trái đất, nhiệt độ toàn cầu sẽ không ngừng tăng lên. Nhưng nguồn nhiệt này có một cách để thoát ra ngoài không gian: thông qua **bức xạ hồng ngoại**[^4]. Trái đât luôn ở trong trạng thái cân bằng nhiệt động học thông qua việc hấp thụ năng lượng mặt trời và bức xạ hồng ngoại vào không gian.  Chúng ta sẽ tìm hiểu thêm ở **Chương 5**, *tốc độ*  dòng năng lượng được gọi là **công suất** (như dòng điện năng trong một đơn vị thời gian). Công suất có thể được dùng để biểu diễn các dòng năng lượng liên tục ra vào hệ thống trái đất. Trong vật lí có một công thức đơn giản, được định nghĩa rõ ràng về công suất bức xạ của một vật thể, gọi là **Định luật Stefan-Boltzmann**:

[^4]: 

    ...một dạng của bức xạ điện từ (*electro-magnetic radiation*)

$$
P = A_{s}\sigma(T_{hot}^4 - T_{cold}^4) \tag{1.8}\label{1.8}
$$

$P$ là công suất bức xạ, $A_{s}$ là diện tích bề mặt, $T_{hot}$ là nhiệt độ bức xạ của vật theo thang độ Kelvin ($K$) (không phải độ $C$!), $T_{cold}$ là nhiệt độ môi trường (cũng đo theo độ $K$), và $\sigma$ (*sigma*) là **hằng số Stefan-Boltzmann**: $\sigma = 5{,}67\times10^{-8}$ $W/m_2/K^4$ (Để dễ nhớ: ghi nhớ dãy 5&ndash;6&ndash;7&ndash;8 cùng với dấu mũ âm). Chú ý rằng định luật này dùng hiệu số lũy thừa mũ $4$ của hai nhiệt độ.

!!! info ""

    Ngoài **Phương trình** $\eqref{1.8}$, chúng ta tạm thời bỏ qua <a href="https://vi.wikipedia.org/wiki/%C4%90%E1%BB%99_ph%C3%A1t_x%E1%BA%A1" target="_blank">Độ phát xạ</a> (*emmissivity*) (của bề mặt vật liệu)

!!! note "Công thức đổi nhiệt độ"

    Chuyển đổi từ độ Kelvin sang độ $C$ (*Celsius*)  độ F (Fahrenheit): <br>
    $T(^\circ{K}) = T(^\circ{C}) + 273{,}15$ <br>
    $T(^\circ{C}) = (T(^\circ{F}) − 32)/1{,}8$

!!! example "Ví dụ $\textbf{1.3}$:"

    Một chiếc bàn trong một phòng kín, có nhiệt độ bàn và nhiệt độ tường giống nhau, bức xạ luân chuyển trong môi trường không đáng kể, vì theo Phương trình $\eqref{1.8}$, nhiệt độ bàn và tường bằng nhau nên triệt tiêu lẫn nhau. Trong tường hợp này, bức xạ từ bàn đến tường cũng bằng bức xạ từ tường đến bàn. Nhưng một vật với mức nhiệt-độ-phòng là $300$ $K$ (khoảng gần $23^\circ{C}$), bức xạ gần $450$ $W$ mỗi mét vuông ra ngoài không gian.

Vì không gian rất lạnh (hàng chục độ K, trừ khi ánh sáng mặt trời chiếu đến), lũy thừa mũ bốn của nhiệt độ này quá nhỏ so với lũy thừa mũ bốn của nhiệt độ phòng ($300$ $K$) nên chúng ta có thể bỏ qua khi tính bức xạ ngoài không gian ($P_{space}$):

$$
P_{space} ≈ A_{s}\sigma(T^4) \tag{1.9}\label{1.9}
$$

Ở đây, chúng ta chỉ có một nhiệt độ: nhiệt độ của vật trong không gian.

Trái đất đạt đến trạng thái cân bằng khi năng lượng hấp thụ và phát ra bằng nhau[^5]. Nếu năng lượng hấp thụ bởi Trái đất nhiều hơn, nhiệt độ sẽ tăng ($\sigma(T^4)$ tăng) để cân bằng lại. 

[^5]:

    Biến đổi khí hậu là do khí nhà kính (greenhouse gases) chặn một phần bức xạ ra không gian, làm tăng mức cân bằng nhiệt độ khoảng $∼0{,}1\%$. Điều này sẽ được nói đến trong **Chương 9**.

Mối liên hệ giữa các đại lượng trong **Phương trình** $\eqref{1.9}$ là rất quan trọng để hiểu được cân bằng nhiệt độ trên Trái đất, vốn được áp dụng một cách phổ quát khắp nơi trên địa cầu.

!!! note "Hộp $\textbf{1.4}$: Mọi vật đều bức xạ"

    **Phương trình** $\eqref{1.8}$ chỉ ra qui luật chung cho bề mặt mặt trời, dây tóc bóng đèn điện, than đá được đốt cháy, và ngay cả cơ thể người. Mức chuyển hóa căn bản của một người cần tiêu thụ năng lượng tương đương với một bóng đèn dây tóc (khoảng $100$ $W$), nhưng bóng đèn lại có nhiệt độ cao hơn, vì diện tích bề mặt nhỏ hơn.

![Radiation-Light](../../assets/images/radiation-light.svg#only-light)
![Radiation-Dark](../../assets/images/radiation-dark.svg#only-dark)

> **Hình** $\textbf{1.4}$: <i>Trái đất&mdash;được minh họa như hình, trong mùa hè ở bán cầu bắc&mdash;hứng ánh sáng qua bề mặt chắn sáng (đường tròn có diện tích $πR^2$), trong khi bức xạ ánh ra bên ngoài không gian từ mọi phía (diện tích bề mặt Trái đất lớn gấp 4 lần diện tích hứng sáng, hay $4πR^2$).</i>

Để đánh giá nhiệt độ kì vọng của Trái đất, chúng ta biết năng lượng của mặt trời chiếu đến bề mặt hứng ánh sáng của Trái đất là khoảng $1.360$ $W/m^2$ vào *bên trên* tầng khí quyển (bề mặt Trái đất nhận được ít hơn một chút). Chúng ta cũng biết khoảng $29{,}3\%$ năng lượng này phản xạ bởi mây, tuyết, cho đến nước và địa hình. Vì thế Trái đất *hấp thụ* khoảng $960$ $W/m^2$. Năng lượng này được hấp thụ bởi phần hứng sáng: diện tích hình tròn $A = π{R_\oplus^2}$. Nhưng toàn bộ diện tích bề mặt trái đất, vốn lớn hơn bốn lần diện tích hứng sáng, lại bức xạ ra ngoài không gian (**Hình** $\textbf{1.4}$). Do năng lượng của trái đất cân bằng (công suất năng lượng vào $P_{in}$ bằng công suất năng lượng ra $P_{out}$), ta có:

$$
P_{in} = (1 - 29.3\%) \times 1.360 W/m^2 \times π{R_\oplus^2} = P_{out} = 4π{R_\oplus^2}\sigma(T^4) \tag{1.10}\label{1.10}
$$

Chúng ta có thể triệt tiêu và đổi vế để tính nhiệt độ Trái đất khi cân bằng công suất năng lượng:

$$
T^4 = \frac{0{,}707 \times 1.360 W/m^2}{4\sigma} \tag{1.11}\label{1.11}
$$

Giải ra ta được $T ≈ 255 K$, hay $-18^\circ{C}$, khoảng ($0^\circ{F}$). Nhiệt độ này quá lạnh. Hiện tại chúng ta đo được nhiệt độ trung bình trên Trái đất khoảng $288 K$, hay $15^\circ{C}$ ($59^\circ{F}$). Sự khác biệt tới $33^\circ{C}$ này gây ra chủ yếu bởi khí nhà kính&mdash;mà phần lớn là hơi nước, $H_2O$&mdash;làm ảnh hưởng đến cân bằng nhiệt bằng cách ngăn không cho bức xạ thoát ra trực tiếp ngoài không gian. Chúng ta sẽ tìm hiểu phần này sâu hơn trong **Chương 9**.

Nhờ **Phương trình** $\eqref{1.11}$, giờ đây ta có thể ước tính được ảnh hưởng của nhiệt hao phí lên sự cân bằng nhiệt độ của Trái đất. Sử dụng năng lượng mặt trời làm mốc, chúng ta có thể thêm vào các nguồn năng lượng theo cấp số nhân từ ví dụ trong các phần trước: bắt đầu với năng lượng tiêu thụ của con người $18$ $TW$ và tăng trưởng ở mức $2{,}3\%$ một năm (tương đương gấp 10 lần mỗi thế kỉ). Để đơn giản, chúng ta biểu diễn năng lượng con người tiêu thụ qua năng lượng mặt trời chiếu xuống và chỉ cần cấp số nhân tử số trong **Phương trình** $\eqref{1.11}$. Theo đó, sản lượng $18$ $TW$ thêm vào trong diện tích hứng sáng $π{R_\oplus^2}$ khoảng $0{,}14$$W/m^2$ cùng với năng lượng mặt trời (hiện tại đang là một con số vô cùng khiêm tốn), tăng lên gấp 10 cứ mỗi thế kỉ. Sau một thế kỉ, nhiệt độ đã tăng thêm khoảng $33$ $K$ nhờ có khí nhà kính&mdash;được biểu thị trong **Bảng** $\textbf{1.4}$. Ban đầu, tác dụng có vẻ nhỏ, nhưng sau $300$ năm, sản lượng này đã vượt quá nhiều lần mức tăng nhiệt độ hiện tại, và đạt đến nhiệt độ sôi ($100^\circ{C}$) sau hơn $400$ năm! Nếu chúng ta tiếp tục (mặc dù phi thực tế), nhiệt độ Trái đất sẽ nóng hơn nhiệt độ trên bề mặt mặt trời chỉ trong khoảng $1.000$ năm[^6]!

[^6]:

    Cách chúng ta đặt ra bài toàn có vẻ chưa thỏa đáng hoàn toàn, vì nguồn năng lượng loài người có thể tiêu thụ ở đây chỉ là mặt trời. Nhưng ngay cả khi việc khai thác năng lượng từ những vì sao khác trở nên khả thi, với mức tăng năng lượng tiêu thụ $2{,}3\%$ một năm sẽ chỉ giúp chúng ta có thêm một vài thế kỉ.

!!! info "Bảng 1.4. Tăng trưởng công suất năng lượng"
    
    Ở mức $2{,}3\%$ một năm, nhiệt độ tăng do nhiệt hao phí (không phải do phát thải khí $CO_2$) ban đầu chậm, nhưng tăng tốc đột ngột chỉ trong vài trăm năm, đạt đến nhiệt độ sôi chỉ sau hơn 400 năm; và sau 900 năm, nhiệt độ Trái đất thậm chí còn nóng hơn bề mặt mặt trời! Viễn cảnh tăng trưởng thế này thực sự rất phi lý.

<div markdown="1" align="center">
| Năm | Mật độ Công suất <br>$W/m^2$ | $T^\circ{K}$   | $Δ{T}^\circ{C}$ |
|:---: | :------: | :------: | :-------: |
| $100$ | $1{,}4$ | $288{,}1$ | $0{,}1$ |
| $200$ | $14$    | $288{,}9$ | $∼1$    |
| $300$ | $140$   | $296{,}9$ | $∼9$    |
| $400$ | $1{,}400$ | $344$   | $56$    |
| $417$ | $2{,}070$ | $373$   | $100$   |
| $1.000$ | $1{,}4 \times 10^9$ | $8.600$ | $8.300$ |
</div>

Từ những ví dụ trên, ta thấy nếu tăng trưởng công suất tiêu thụ năng lượng ở mức $2{,}3\%$ một năm, chúng ta sẽ dụng hết công suất năng lượng mặt trời chỉ sau $1.400$ năm. Và việc sử dụng toàn bộ năng lượng này trên bề mặt của Trái đất (nhỏ hơn của mặt trời rất nhiều) cũng đồng nghĩa với việc nhiệt độ bề mặt Trái đất sẽ nóng hơn bề mặt mặt trời (chỉ sau $1.400$ năm); tương tự như bóng đèn dây tóc nóng hơn nhiệt độ da người nhiều mặt dù tiêu thụ cùng một mức năng lượng (khoảng $100$ $W$)&mdash;vì diện tích bề mặt khác nhau. (Tham khảo **Phương trình** $\eqref{1.8}$ và $\eqref{1.9}$)

Một trong những điểm quan trọng của viễn cảnh bức xạ nhiệt như trên là nó *không phụ thuộc vào nguồn cung cấp năng lượng*. Năng lượng đó có thể là nhiên liệu hóa thạch, năng lượng từ phản ứng phân hạch hay nhiệt hạch  (chia tách hay tổng hợp hạt nhân), hay cả những nguồn năng lượng chúng ta còn chưa biết đến! Dù là nguồn năng lượng nào, nó cũng phải tuân thủ những định luật nhiệt động học. Vì thế, nhiệt động học đã đặt ra giới hạn cho việc tăng trưởng công suất năng lượng trên hành tinh này.


## 4. Kết luận: Những giới hạn vật lí của tăng trưởng

Chúng ta đã thấy ở chương này hệ quả của việc tăng trưởng liên tục dẫn đến sự vô lí như thế nào. Trước hết, chúng ta nhận thức được sự đánh lừa đôi lúc của trực giác qua ví dụ về sinh sản của vi khuẩn trong hũ. Điểm mấu chốt ở đây là thời điểm hũ vi khuẩn đầy một nửa cho đến khi đầy hoàn toàn chỉ cách nhau khoảng thời gian bằng một lần nhân đôi. Điều này có vẻ hiển nhiên, nhưng khi quan sát kĩ chúng ta thấy sự gia tăng nhanh chóng này chỉ diễn ra ở những giai đoạn cuối cùng của toàn bộ quá trình sinh trưởng của vi khuẩn, khiến cho trực giác của chúng ta vốn quen với việc diễn tiến tuần tự của thực tại trở nên bị động. Sự tăng trưởng mới đầu không có gì nghiêm trọng bỗng chốc thay đổi hoàn toàn chỉ trong một vài lần nhân đôi cuối cùng.

Tiếp theo, chúng ta thấy việc tiếp tục tăng trưởng tiêu thụ năng lượng, dù ở một mức nhỏ (giả sử $2{,}3\%$ một năm), đã trở nên hoàn toàn phi lí chỉ sau vài trăm năm. Từ ví dụ trong chương, nhiệt độ bề mặt của trái đất tăng nhanh kinh ngạc nếu tốc độ tăng trưởng này giữ nguyên chỉ trong vài trăm năm[^7].

[^7]:

    Những ví dụ trong chương này là vô ích chăng, vì kết quả toán học dẫn đến sự vô lí? Hay chúng ta tính toán sai lầm? Không&mdash;đó là những bài tập vô cùng giá trị để nhận ra rằng: nhưng giả định về việc tăng trưởng không ngừng (thông qua việc tính toán) sẽ dẫn đến những kết quả phi lý. Kết luận logic: tăng trưởng không thể tiếp tục mãi mãi. 

    Để ý rằng việc thay đổi tỉ lệ tăng trưởng $2{,}3\%$ một năm sẽ thay đổi toàn bộ các tính toán. Điều này cũng giúp gợi ý cho giải pháp: giảm tăng trưởng!

    

Kết luận, vật lí đã đặt ra những giới hạn về kì vọng của chúng ta trong việc tăng trưởng tiêu thụ năng lượng trên Trái đất. Có thể khung thời gian $∼300$ năm chưa đủ báo động, những nó đã đặt ra những rào cản về vật lí không thể vượt qua cho mức tăng trưởng quá khứ được tiếp diễn trong tương lai. Trên thực tế, những giới hạn này có thể bị chạm tới trong thời gian ngắn hơn. Quá trình tăng trưởng không ngừng đã diễn ra trong một thời gian dài. Chúng ta đang ở gần điểm kết thúc hơn bao giờ hết, trong khi nhân loại không chuẩn bị gì cho thực tế này, thực là thiếu khôn ngoan. Chúng ta sẽ đánh giá chi tiết hơn vào những chương tiếp theo.

Có rất nhiều yếu tốt khác có thể can thiệp vào quá trình giới hạn tăng trưởng ở cả qui mô dân số lẫn tài nguyên sử dụng: sự khan hiếm các nguồn tài nguyên, ô nhiễm, tầng nước ngầm cạn kiệt, thiếu nước ngọt, biến đổi khí hậu, chiến tranh, sự sụp đổ của nghề đánh bắt thủy sản, diện tích đất trồng trọt thu hẹp (do sa mạc hóa), nạn phá rừng, bệnh tật, v.v. Những yếu tố này đều ngăn cản việc tăng trưởng không ngừng. Bằng cách này hay cách khác, chúng ta cần xem giai đoạn tăng trưởng hiện tại chỉ là một quá trình ngắn hạn: một chớp mắt trong lịch sử nhân loại.

<br/>
**Tác giả: T.W. Murphy, Jr. ©2022**;  [Creative Commons Attibution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/); Tải miễn phí tại: [https://escholarship.org/uc/energy_ambitions](https://escholarship.org/uc/energy_ambitions).

**Dịch giả: Team Sống bền vững**