import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

var articles = [
  {
    id: 1,
    name: 'แนะนำภาษา TypeScript',
    img: './assets/images/articles/TS.png',
    description: 'บทความนี้จะพูดถึงเรื่องของภาษา Typescript ความเป็นมา และคุณสมบัติของภาษานี้',
    data: `
    <p class="center"><img src="./assets/images/articles/TS.png" class="responsive" /></p>

    <h2>ภาษา TypeScript คืออะไร</h2>

    <p>
    <b>ภาษา TypeScript</b> เป็นภาษาเขียนโปรแกรมที่พัฒนาโดย Microsoft มันเป็นภาษาที่มีไวยากรณ์การเขียนที่เข้มงวดในเรื่องของประเภทข้อมูลซึ่งช่วยควบคุมการใช้งานประเภทข้อมูลในโปรแกรม ภาษา TypeScript ถูกออกแบบมาเพื่อทำให้การเขียนโปรแกรมในภาษา JavaScript มีประเภทข้อมูล ซึ่งนี่มีประโยชน์มากในการพัฒนาระบบและแอพพลิเคชันขนาดใหญ่ เนื่องจากมันสามารถช่วยตรวจสอบความผิดพลาดก่อนที่โปรแกรมจะทำงานได้ ซึ่งในภาษา JavaScript นั้นเราจะต้องรันโปรแกรมก่อนที่จะพบกับข้อผิดพลาดในเรื่องการใช้งานประเภทข้อมูล<br>
    <b>ภาษา TypeScript</b> สามารถใช้สำหรับพัฒนาแอพพลิเคชันของภาษา JavaScript ที่ทำงานทั้งที่ฝั่ง Client-side และ Server-side โดยเราสามารถใช้มันเพื่อพัฒนาโปรแกรมบน Node.js, Deno หรือบนเว็บเบราว์เซอร์ได้ ซึ่งในท้ายที่สุดแล้วโค้ดที่เขียนในภาษา TypeScript จะถูกแปลงเป็นภาษา JavaScript เพื่อรันและใช้งาน และในการแปลงโค้ดของภาษา TypeScript ให้เป็นภาษา JavaScript นั้น เรายังสามารถใช้เครื่องมืออย่าง Babel ในการกำหนดวิธีการคอมไพล์ของโปรแกรมได้<br>
    <b>ภาษา TypeScript</b> สนับสนุนการกำหนด Declaration file ไฟล์ที่มีนามสกุล d.ts ที่ใช้สำหรับกำหนดประเภทข้อมูลให้กับส่วนต่างๆ ของโค้ด เช่น ตัวแปร ฟังก์ชัน และคลาส เป็นต้น มันมักจะถูกใช้สำหรับอธิบายประเภทข้อมูลของโค้ดเดิมที่เขียนในภาษา JavaScript เพื่อช่วยให้โค้ดเหล่านั้นสามารถใช้งานร่วมกับภาษา TypeScript ได้อย่างไร้รอยต่อ สำหรับโมดูลพื้นฐานบน Node.js นั้นมี Declaration file ให้ใช้งานสำหรับการเขียนภาษา TypeScript บน Node.js
    </p>

    <h2>ประวัติของภาษา TypeScript</h2>
    <p class="articales">
    ภาษา TypeScript ได้ถูกเปิดตัวเป็นครั้งแรกในเดือนตุลาคม 2012 ในเวอร์ชัน 0.8 หลังจากที่ได้มีการแอบพัฒนามากว่าสองปีภายในบริษัท Microsoft แต่ในการเปิดตัวครั้งแรกนั้น ยังไม่มี IDE ไหนเลยที่สนับสนุนการเขียนโปรแกรมด้วยภาษา TypeScript ยกเว้น Microsoft Visual Studio ซึ่งเป็น IDE ของทาง Microsoft เอง และในตอนนั้นมันก็ยังไม่สามารถใช้งานได้บนระบบปฏิบัติการ Linux หรือ Mac OS X และในปี 2021 มี IDE เป็นจำนวนมากที่สนับสนุนการเขียนโปรแกรมด้วยภาษา TypeScript เช่น Emacs, Vim, Webstorm, Atom และ Visual Studio Code สำหรับอันสุดท้ายเป็น IDE ของ Microsoft เองและมันยังเป็น IDE ที่ได้รับความนิยมมากที่สุดในปัจจุบัน สำหรับในบทเรียนนี้ เราจะใช้โปรแกรม Visual Studio Code สำหรับเขียนโปรแกรมในภาษา TypeSctipt และเราแนะนำให้คุณใช้มันด้วยเช่นกัน หลังจากนั้นภาษา TypeScript ได้มีการพัฒนามาอย่างต่อเนื่อง และเวอร์ชัน 0.9 ถูกเปิดตัวในปี 2013 ซึ่งสนับสนุนการใช้งาน Generic ในการประกาศฟังก์ชันและคลาสให้สามารถทำงานกับประเภทข้อมูลแบบไดนามิกส์ได้ ส่วนเวอร์ชัน 1.0 ได้ถูกเปิดตัวในการประชุมของ Microsoft ในปี 2014 จนกระทั่งในเดือนกรกฎาคม 2014 ทีมพัฒนาได้เปิดตัวคอมไพเลอร์เวอร์ชันใหม่ของภาษา TypeScript ที่กล่าวว่ามีประสิทธิภาพเพิ่มมากขึ้นถึง 5 เท่าเมื่อเทียบกับเวอร์ชันก่อนหน้า และเวอร์ชัน 2.0 ถูกเปิดตัวในเดือนกันยายน 2016 ซึ่งในเวอร์ชันนี้มีการเพิ่มคุณสมบัติใหม่ๆ เข้ามาหลายอย่าง เช่น การทำให้ตัวแปรไม่สามารถกำหนดค่าเป็น NULL ได้และใน TypeScript เวอร์ชัน 3.0 ถูกเปิดตัวในเดือนกรกฎาคม 2018 และมีการเพิ่มคุณสมบัติใหม่ เช่น Tuple ใน Rest พารามิเตอร์ของฟังก์ชัน Spread expression สำหรับการกำหนด Rest พารามิเตอร์ด้วยประเภทข้อมูลแบบ Tuple และการกำหนด Rest พารามิเตอร์ของฟังก์ชันด้วย Generic เป็นต้น ในปัจจุบันเวอร์ชันล่าสุดของภาษา TypeScript อยู่ที่เวอร์ชัน 4.0 ในเวอร์ชันนี้มีการเพิ่มคุณสมบัติใหม่เข้ามาเพียงเล็กน้อย เช่น การสร้าง JSX Factories แบบกำหนดเอง และ Variadic Tuple Types นี่เป็นเวอร์ชันที่เราจะใช้ในบทเรียนนี้ และสำหรับแพ็ชล่าสุดอยู่ที่เวอร์ชัน 4.3.5 ในวันที่บทความนี้ถูกเขียนขึ้น
    </p>

    <h2>คุณสมบัติของภาษา TypeScript</h2>
    <p class="articales">
    ภาษา TypeScript เป็นภาษาที่ถูกสร้างมาเพื่อให้เป็นส่วนขยายหรือเพิ่มความสามารถให้กับภาษา JavaScript เพื่อช่วยให้การเขียนโปรแกรมมีประสิทธิภาพมากขึ้น โดยมันถูกพัฒนาตามข้อกำหนดของ ECMAScript และนี่เป็นคุณสมบัติที่สำคัญของภาษา TypeScript ที่ทำให้มันโดดเด่นและนักพัฒนาเป็นจำนวนมากเลือกที่จะใช้มัน
    </p>

    <ul>
    <li><strong>Type annotation</strong>: เป็นการประกาศตัวแปรแบบระบุประเภทข้อมูล นี่จะครอบคลุมส่วนของการประกาศในทุกที่ เช่น พารามิเตอร์ของฟังก์ชัน Property ของคลาสและออบเจ็ค เป็นต้น</li>
    <li><strong>Compile-time type checking</strong>: การตรวจสอบประเภทข้อมูลในระหว่างการคอมไพล์ ที่สามารถช่วยตรวจสอบข้อผิดพลาดที่อาจเกิดจากการใช้ข้อมูลผิดประเภท ก่อนที่โปรแกรมจะทำงาน</li>
    <li><strong>Type inference</strong>: เป็นการตรวจสอบประเภทข้อมูลอัตโนมัติจากค่า Literal ที่กำหนดให้กับตัวแปร หรือได้รับจากการคำนวณของ Expression</li>
    <li><strong>Type erasure</strong>: เป็นการลบประเภทข้อมูลที่กำหนดให้กับตัวแปรออกในตอนคอมไพล์เพื่อแปลงโค้ดเป็นภาษา JavaScript</li>
    <li><strong>Interfaces</strong>: ในภาษา TypeScript นั้น Interface ใช้สำหรับกำหนดรูปแบบและโครงสร้างให้กับคลาสและออบเจ็ค</li>
    <li><strong>Enumerated types</strong>: เป็นการกำหนดประเภทข้อมูลที่ประกอบไปด้วยเซ็ตของข้อมูลที่กำหนดเท่านั้น</li>
    <li><strong>Generics</strong>: เป็นการออกแบบฟังก์ชันและคลาสให้สามารถใช้ได้กับข้อมูลมากกว่าหนึ่งประเภท</li>
    <li><strong>Namespaces</strong>: เนมสเปซเป็นแนวคิดของการจัดกลุ่มของออบเจ็ค และช่วยแก้ปัญหาการตั้งชื่อที่ขัดแย้งกันได้</li>
    <li><strong>Tuples</strong>: เป็นเซ็ตของข้อมูลที่มีอยู่อย่างจำกัดคล้ายกับอาเรย์ แต่ไม่สามารถเปลี่ยนแปลงค่าได้</li>
    </ul>

    <p>และนี่เป็นคุณสมบัติเดิมที่ยังสามารถใช้ได้เหมือนกับในภาษา JavaScript แต่บางอย่างอาจมีการเปลี่ยนแปลงเพื่อเพิ่มความสามารถ</p>
    <ul>
    <li>Async/await</li>
    <li>Classes</li>
    <li>Modules</li>
    <li>Arrow function</li>
    <li>Optional parameters</li>
    <li>Default parameters</li>
    </ul>
    <p>นั่นหมายความว่าภาษา TypeScrtipt ไม่ได้ลดความสามารถใดๆ ที่ทำได้ในภาษา JavaScript แต่เพิ่มคุณสมบัติที่ช่วยให้การพัฒนาโปรแกรมมีประสิทธิภาพและดีขึ้น โดยเฉพาะอย่างยิ่งในเรื่องการใช้งานประเภทข้อมูล ซึ่งเป็นปัญหาที่พบมากที่สุดสำหรับการเขียนโปรแกรมในภาษา JavaScript</p>

    <h2>การเขียนโปรแกรมภาษา TypeScript</h2>
    <p class="articales">สำหรับการเขียนโปรแกรมด้วยภาษา TypeScript นั้นสามารถทำได้เหมือนภาษา JavaScript คุณสามารถเขียนมันบน Editor หรือแพลตฟอร์มใดๆ ได้ เพราะในตอนท้ายแล้ว โค้ดที่เขียนในภาษา TypeScript จะถูกแปลงเป็นภาษา JavaScript ก่อนนำไปรันเสมอ และนี่เป็นขั้นตอนพื้นฐานที่จะต้องทำสำหรับการเขียนโปรแกรมด้วยภาษา TypeScript</p>
    <ol>
    <li>เขียนโปรแกรมในภาษา TypeScript ที่มีนามสกุลเป็น <code>.ts</code></li>
    <li>คอมไพล์โค้ดที่เขียนไปยังภาษา JavaScript จะได้รับไฟล์ที่มีนามสกุลเป็น <code>.js</code></li>
    <li>และสุดท้ายรันโปรแกรม <code>.js</code></li>
    </ol>

    <p>และในการคอมไพล์ภาษา TypeScript เป็นภาษา JavaScript เราจะต้องติดตั้งคอมไพเลอร์ของมันก่อน คอมไพเลอร์ของภาษา TypeScript นั้นเป็นโปรแกรมแบบ CLI ที่มีชื่อว่า <code>tsc</code> ที่สามารถติดตั้งได้จาก NPM บน Node.js ซึ่งจะพูดถึงในบทต่อไป</p>

    <h2>เครื่องมือพัฒนาโปรแกรมภาษา TypeScript</h2>
    <p>ในการพัฒนาโปรแกรมด้วยภาษา TypeScript นั้นเราต้องการเครื่องมือสามอย่างสำหรับการทำงาน ซึ่งประกอบไปด้วย</p>
    <ul>
    <li>Node.js สภาพแวดล้อมสำหรับคอมไพลและรันโปรแกรม</li>
    <li>TypeScript คอมไพลเลอร์</li>
    <li>Text edtitor หรือ IDE ซึ่งเป็นโปรแกรมสำหรับแก้ไขโค้ด</li>
    </ul>
    `
  },
  {
    id: 2,
    name: 'ทำความรู้จัก OSI Model',
    img: './assets/images/articles/OSI.png',
    description: 'บทความนี้จะเกี่ยวกับเรื่อง OSI Model และการทำงานของเครือข่าย',
    data: `
<p class="center"><img src="./assets/images/articles/OSI.png" class="responsive2" /></p>

<h2>OSI Model คืออะไร?</h2>

<p class='articales'>
  <b>OSI Model (Open Systems Interconnection Model)</b>
  คือรูปแบบการรับส่งข้อมูลระหว่างอุปกรณ์อิเล็กทรอนิกส์
  ผ่านระบบเครือข่าย เป็นตัวกำหนดรูปแบบของผู้ส่งข้อมูล (Sender) และ ผู้รับข้อมูล (Receiver) จะแบ่งการทำงานออก
  เป็น 7 Layers โดย Layer 4-7 จะเน้นไปที่การติดต่อกับ User ผ่าน Software เป็นหลัก ส่วน Layer 1-3 จะเน้นที่การสื่อสาร
  ในระดับ Hardware เป็นหลัก โดยแต่ละ Layer จะมีบทบาท, หน้าที่และหลักการทำงานที่แตกต่างกันแต่จะทำงาน
  ร่วมกับ Layer ที่อยู่ติดกัน ดังนี้
</p>

<p>
  <hr>

  <p>
    <b>1.Application-oriented layers (Layer 4-7)</b> คือ กลุ่มของ Layers ที่ใช้สื่อสารการเชื่อมต่อข้อมูลระหว่าง Sender และ Receiver เข้ากับ Application ต่างๆ โดยจะเกี่ยวข้องกับ Software เป็นหลัก
  </p>

  <p class="articales">
    <b>Layer 7: Application Layer</b> เป็น Layer ที่อยู๋ใกล้กับ Users มากที่สุด โดยจะเป็น Protocol ต่างๆที่ใช้ในการสื่อสารกับ user เช่น HTTP, FTP นิยมใช้กับ Software เพื่อง่ายต่อการ Interact กับ Users เช่น หาก user ต้องการใช้ Protocol HTTP เพื่อท่องโลก internet ก็จะใช้ browser เช่น Firefox, Chrome, etc เพื่อเรียกใช้ Protocol ดังกล่าวนั่นเอง
    <p class="center"><img src="./assets/images/articles/OSI_Layer7.png" class="responsive" /></p>
  </p>

  <p class="articales">
    <b>Layer 6: Presentation Layer</b> เป็น Layer ที่ใช้ในการ Translate ข้อมูลจาก/ไปยัง Application layer เช่น Sender พิมพ์ข้อความว่า “Hello, how are you?” layer นี้จะทำการแปลงข้อความเหล่านั้นเป็นรหัส และให้ Presentation layer จากฝั่ง Receiver เป็นตัวแปลงรหัสเหล่านั้นให้กลับมาเป็นข้อความ “Hello, how are you?” ให้ Receiver ได้รับ
    <p class="center"><img src="./assets/images/articles/OSI_Layer6.png" class="responsive2" /></p>
  </p>

  <p class="articales">
    <b>Layer 5: Session Layer</b> เป็น Layer ที่มีการ Sync เงื่อนไขการใช้งานระหว่างเครื่องต้นทางกับเครื่องปลายทาง เช่น User ต้องการขอใช้บริการบางอย่างจาก Server เป็นเวลา 20 นาที ผ่าน port 99, Server ก็จะส่งข้อความอนุญาตให้ User ดังกล่าวใช้บริการผ่าน port 99 ได้ เป็นเวลา 20 นาที หาก Session ที่ขอใช้งานเกิดหมดเวลา ก็จะไม่สามารถใช้บริการนั้นได้
    <p class="center"><img src="./assets/images/articles/OSI_Layer5.png" class="responsive2" /></p>
  </p>

  <p class="articales">
    <b>Layer 4: Transport Layer</b> เป็น Layer ที่จะควบคุมการขนส่งข้อมูลจาก Sender ไปยัง Receiver หรือจาก Receiver ไปยัง Sender เมื่อเกิดการรับส่งข้อมูล ตัว Transport layer จะทำการแบ่งชิ้นส่วนข้อความดังกล่าวเป็นชิ้นเล็กๆหลายๆชิ้นเรียกว่า “Segment” และทำการ Add L4 Header (ประกอบด้วย Protocol ที่ใช้, Source Port และ Destination Port) เข้าไปบน Segments แต่ละชิ้น เพื่อให้ง่ายต่อการส่งและตรวจสอบความถูกต้อง โดยวิธีการนี้เรียกว่า Segmentation
    <p class="center"><img src="./assets/images/articles/OSI_Layer4.png" class="responsive3" /></p>
  </p>

  <hr>

  <p>
    <b>2. Network-dependent Layers (Layer 1-3)</b> คือ กลุ่มของ Layers ที่ทำหน้าที่เชื่อมต่อคอมพิวเตอร์ของทั้ง Senders และ Receivers ผ่านระบบเครือข่ายทั้งแบบมีสายและไร้สาย โดยจะเกี่ยวข้องกับ Hardware เป็นหลัก ซึ่งสำหรับบุคลากรที่ทำงานสาย Network จะเน้นศึกษาที่ Layers เหล่านี้
  </p>

  <p class="articales">
    <b>Layer 3: Network Layer</b> เป็น Layer ที่ทำการสร้างช่องทางการเชื่อมต่อระหว่าง Network ของ Sender และ Receiver เข้าด้วยกันผ่าน IP Address รวมถึง โดย Layer นี้จะรับ Segments จาก Transport Layer มา Add L3 Header (ประกอบด้วย Source IP และ Destination IP) และตั้งชื่อให้ใหม่ว่า “Packet” โดยอุปกรณ์ที่ทำหน้าที่บน Layer3 ได้แก่ Router, L3 Switch(Multilayer Swith), Wireless Router เป็นต้น
    <p class="center"><img src="./assets/images/articles/OSI_Layer3.png" class="responsive3" /></p>
  </p>

  <p class="articales">
    <b>Layer 2: Data link Layer</b> เป็น Layer ที่ทำการเชื่อมต่อข้อมูลแบบ node to node เช่น PC-Switch, Swith-Switch หรือ Switch-Router เป็นต้น โดยจะใช้ MAC Address ส่วนมากจะใช้สาย UTP เป็นตัวเชื่อมต่ออุปกรณ์เหล่านี้เข้าด้วยกัน โดย Layer นี้จะรับ Packet จาก Network Layer มาทำการ Add L2 Header และ L2 Trailer (ประกอบด้วย Source MAC, Destination MAC, Tag VLAN, etc) และเรียกชื่อใหม่ว่า “Frame” โดยอุปกรณ์ที่ทำหน้าที่บน Layer2 ได้แก่ Switch, Bridge
    <p class="center"><img src="./assets/images/articles/OSI_Layer2.png" class="responsive3" /></p>
  </p>

  <p class="articales">
    <b>Layer 1: Physical Layer</b> เป็น Layer ที่ทำการนำ Frame ข้อมูลจาก Data Link Layer ส่งระหว่างอุปกรณ์ Network ผ่านตัวกลาง เช่น สาย UTP, สาย Fiber optic โดยเราเรียกสิ่งที่ส่งผ่านตัวกลางเหล่านี้ว่า “Bits”หรือ “Bytes” (8 Bits = 1 Byte)
    <p class="center"><img src="./assets/images/articles/OSI_Layer1.png" class="responsive3" /></p>
  </p>
</p>
    `
  },
  {
    id: 3,
    name: 'ประวัติ Windows',
    img: './assets/images/articles/Windows.png',
    description: 'บทความนี้จะพาย้อนรอยดูหน้าตาของ Windows ตั้งแต่ Windows 1.0 จนถึง Windows 10',
    data: `
<p class="center"><img src="./assets/images/articles/Windows.png" class="responsive2" /></p>

<p>
  <b>Microsoft Windows</b> เป็นระบบปฏิบัติการที่ได้รับความนิยม และเป็นที่รู้จักมากที่สุดทั่วโลก ซึ่งกว่าจะมาเป็น Windows นั้น Microsoft เคยสร้างระบบปฏิบัติการอื่นๆ ไว้ด้วย เช่น Altair BASIC ซึ่งมันก็มีส่วนที่ช่วยให้ Windows ได้กลายมาเป็นระบบปฏิบัติการที่เรารู้จักจนถึงทุกวันนี้
</p>

<p>
  <p class="articales">
    <b>MS-DOS (1981)</b>
    <p class="center"><img src="./assets/images/articles/MSDOS.png" class="responsive2" /></p>
    <p class="articales">
      MS-DOS ซึ่งเป็นการเปิดประวัติศาสตร์ระบบปฏิบัติการสำหรับเครื่องคอมพิวเตอร์ PC โดย MS-DOS เดิมใช้ชื่อว่า 86-DOS สร้างขึ้นโดย Tim Paterson จาก Seattle Computer Products ซึ่งมันโคลนมาจาก CP/M OS ของ Digital Research อีกที แต่ 86-DOS ได้เพิ่มความเข้ากันได้กับซีพียู x86 และใช้ระบบไฟล์แบบ FAT12 ต่อมา Microsoft ได้ซื้อ 86-DOS และนาย Paterson มาพัฒนาระบบให้ต่อ แล้วเปลี่ยนชื่อระบบปฏิบัติการเป็น MS-DOS จากนั้นมันถูกขายให้กับ IBM ในชื่อ PC-DOS ซึ่งก็เป็นความฉลาดของ Microsoft ที่เข้าหาบริษัทยักษ์ใหญ่ในสมัยนั้น ทำให้ MS-DOS กลายเป็นระบบปฏิบัติการที่แพร่หลายอย่างรวดเร็ว
    </p>
  </p>

  <p class="articales">
    <b>Windows 1.0 (1985)</b>
    <p class="center"><img src="./assets/images/articles/Windows1_0.png" class="responsive3" /></p>
    <p class="articales">
    จากนั้นไม่นาน Microsoft ได้นำระบบติดต่อผู้ใช้แบบกราฟิก หรือ GUI เข้ามาครอบทับ MS-DOS ทำให้เกิดเป็นภาพกราฟิกสวยงามแทนที่จะเป็นจอดำๆ อย่างไรก็ตาม โปรแกรมภายใน Windows 1.0 จะทำงานภายใต้การควบคุมของ MS-DOS เทคโนโลยีเด่นที่มีอยู่ใน Windows 1.0 คือ Virtual memory ที่สามารถดึงพื้นที่ส่วนหนึ่งบนฮาร์ดดิสก์ มาใช้เสมือนเป็นแรมของระบบ แม้มันจะทำงานได้ช้ากว่าแรมจริงๆ แต่ก็ช่วยให้ระบบสามารถรันโปรแกรมขนาดใหญ่ได้
    </p>
  </p>

  <p class="articales">
    <b>Windows 2.0 (1987)</b>
    <p class="center"><img src="./assets/images/articles/Windows2_0.png" class="responsive3" /></p>
    <p class="articales">
      Windows 2.0 ได้ปรับปรุงเพิ่มเติมจากรุ่น 1.0 โดยเพิ่มฟีเจอร์ใหม่ๆ ให้ระบบสามารถทำงานได้ดีขึ้น และยังความสามารถในการจัดน้าต่างของโปรแกรม ให้วางซ้อนๆ กันได้ (Windows overlap) เพื่อให้้ผู้ใช้งานสามารถทำงานแบบ Multitasking ได้ดี โดยได้ใช้พื้นที่ของเดสก์ทอปได้เต็มที่ครับ
    </p>
  </p>

  <p class="articales">
    <b>Windows 2.1(1988)</b>
    <p class="center"><img src="./assets/images/articles/Windows2_1.png" class="responsive3" /></p>
    <p class="articales">
      ไม่นานก็ได้มีการปรับปรุงกันอีกครั้ง กับ Windows 2.1 โดยเพิ่มการรองรับซีพียู Intel 80286 และ 80386 พร้อมด้วย HIMEM.sys ซึ่งเป็นฟังก์ชันหนึ่งของระบบที่ช่วยให้ Windows สามารถเข้าถึงหน่วยความจำขนาดใหญ่ได้ดีกว่ารุ่นก่อน นอกจากนี้รองรับ Protect mode ใน Intel 80386 ซึ่งช่วยให้สามารถใช้งานโปรแกรมหลายๆ โปรแกรมพร้อมกันได้ (ก่อนหน้าที่ไม่มี Protect mode โปรแกรมที่ไม่ถูกใช้งานในขณะนั้น จะเหมือนถูกปิดไว้ ไม่มีโปรเซสใดๆ เกิดขึ้น) และที่สำคัญที่สุดคือ Windows 2.1 เป็นระบบปฏิบัติการตัวแรกของ Microsoft ที่ต้องใช้ฮาร์ดดิสก์ในการติดตั้งครับ (รุ่นก่อนหน้า น่าจะเป็นการรันผ่านแผ่นดิสก์เก็ต) Windows 2.1 (1988)
    </p>
  </p>

  <p class="articales">
    <b>Windows 3.0 (1990)</b>
    <p class="center"><img src="./assets/images/articles/Windows3_0.png" class="responsive3" /></p>
    <p class="articales">
      Windows 3.0 มีการปรับปรุงเพิ่มเติมจากรุ่นก่อนหน้า แต่ยังมีความคล้ายคลึงกันในหลายๆ ส่วน ที่แตกต่างกันก็จะเป็นเรื่องของการรองรับสีถึง 16 สี ใน VGA mode ระบบปฏิบัติการสามารถเรนเดอร์ภาพได้ 256 สีในเวลาเดียวกัน อีกทั้งยังมีการปรับปรุง Protect mode ให้ระบบปฏิบัติการสามารถเข้าถึงหน่วยความจำได้มากขึ้น ซึ่งทำให้มันรองรับแรมได้สูงถึง 16 MB ส่วนตัวระบบปฏิบัติการเองจะกินเนื้อในฮาร์ดดิสก์ไป 5 MB การเดินเกมทางการตลาดของ Microsoft ถือว่าทำได้ดีมาก โดยมีการติดตั้ง Windows 3.0 ไว้กับผู้ผลิตคอมพิวเตอร์รายย่อย แล้วขายเป็นแบบ OEM ผู้ใชงานเลยนิยมกัน เนื่องจากซื้อคอมไปแล้วก็ได้ระบบปฏิบัติการไปด้วย ทำให้มันถูกขายไปกว่า 1 ล้านก๊อปปี้เลยทีเดียว
    </p>
  </p>

  <p class="articales">
    <b>Windows 3.1(1992)</b>
    <p class="center"><img src="./assets/images/articles/Windows3_1.png" class="responsive3" /></p>
    <p class="articales">
    การปรับปรุงครั้งใหญ่เกิดขึ้นที่ Windows 3.1 โดยมีการปรับปรุงอยู่ด้วยกัน 3 อย่างคือ อย่างแรก Windows 3.1 จะสนับสนุนซีพียู Intel 80286 หรือใหม่กว่าเท่านั้น ซึ่งช่วยให้ระบบปฏิบัติการมีความเสถียรมากขึ้น สองคือการรองรับ Truetype font ซึ่งทำให้ Windows 3.1 เหมาะแก่การทำงานออฟฟิศมากขึ้น " เรื่องฟอนต์นี่ก็เป็นปัญหาระหว่าง  Apple กับ Microsoft เหมือนกันนะ "  และสามคือระบบปฏิบัติการรองรับแรมสูงสุด 4 GB โดยโปรแรกมแต่ละโปรแกรมสามารถใช้แรมได้สูงสุด 16 MB ส่วนตัวระบบปฏิบัติการเองต้องการแรมอย่างน้อย 1 MB และใช้พื้นที่ติดตั้ง 15 MB นอกจากนี้ Windows 3.1 ยังมีรุ่นย่อยๆ เพิ่มเติม เช่น Windows for Workgroups 3.1 และ Windows 3.1 Multimedia PC เพื่อเจาะกลุ่มผู้ใช้งานเฉพาะนั่นเอง
    </p>
  </p>

  <p class="articales">
    <b>Windows 95 (1995) ตอนที่ 1</b>
    <p class="center"><img src="./assets/images/articles/Windows95.png" class="responsive3" /></p>
    <p class="articales">
      ในช่วงแรก Microsoft ต้องการที่จะสร้างระบบปฏิบัติการที่ใช้พื้นฐานของ Windows NT โดยตอบสนองทั้งกลุ่มผู้ใช้งานทั่วไป และกลุ่มธุรกิจ โดยตั้งชื่อมันว่า Windows Cairo แล้วให้ Windows 3.1 ครองตำแหน่งระบบปฏิบัติการสำหรับผู้ใช้งานทั่วไป " ระดับล่างๆ หน่อย " ที่ยังต้องใช้ฐานเป็น DOS ทว่าการพัฒนา Cairo ทำได้ล่าช้า เพราะฉะนั้นจึงได้มีการสร้าง Windows 95 เพื่อแข่งขันกับ Apple และ IBM
    </p>
  </p>

  <p class="articales">
    <b>Windows 95 (1995) ตอนที่ 2</b>
    <p class="center"><img src="./assets/images/articles/Windows95_2.jpg" class="responsive3" /></p>
    <p class="articales">
    จุดประสงค์ในการสร้าง Windows 95 คือการสร้างระบบปฏิบัติการที่ง่ายต่อการใช้งาน และรองรับซอฟต์แวร์แบบ 32-bit ในตอนแรก Microsoft คิดว่าจะไม่เปลี่ยนรูปแบบอินเตอร์เฟสของ Windows 95 " กะจะเก็บไว้ใช้กับ Cairo " แต่สุด้ายก็มีการนำ UI จาก Cairo มาใส่ไว้ใน Windows 95 ทำให้มันเป็น Windows รุ่นแรกที่มี Start bar และ Windows Explorer จริงๆ แล้ว Windows 95 ยังคงมีพื้นฐานการพัฒนาจาก DOS เหมือน Windows 3.1 เพียงแต่ในทางเทคนิคแล้วมันไม่ต้องพึ่งพา DOS " ถ้าใครได้ลองใช้ Windows 3.1 และ 95 จะรู้ว่าตรงนี้มันต่างกัน " ซึ่งถือว่าเป็นเรื่องสำคัญ เพราะมันช่วยลดปัญหาระบบล่มได้ดีเลยครับ ประสิทธิภาพของ Windows 95 ถือว่าก้าวกระโดดเป็นอย่างมาก จากการรองรับซอฟต์แวร์แบบ 32-bit รวมถึงสามารถทำงานร่วมกับซีพียูที่มีความเร็วมากขึ้นได้ดีเยี่ยม แถมยังไม่กินสเปคมากเหมือนฝั่ง Windows NT ด้วย
    </p>
  </p>

  <p class="articales">
    <b>Windows 98 (1998)</b>
    <p class="center"><img src="./assets/images/articles/Windows98.png" class="responsive3" /></p>
    <p class="articales">
    Windows 98 คือการปรับปรุงครั้งใหญ่จาก Windows 95 ในช่วงนั้นอินเทอร์เน็ตเริ่มเข้ามามีบทบาทในการใช้งานคอมพิวเตอร์ Windows 98 จึงมีโปรแกรมมากมายที่สนับสนุนนการใช้งานอินเทอร์เน็ต และเป็น Windows รุ่นแรกที่มาพร้อมกับ Internet Explorer ในตำนาน Microsoft ต้องการให้ Windows 98 มีเสถียรภาพมากกว่ารุ่นก่อน จึงได้มีการเพิ่มโปรแกรมที่เกี่ยวข้องกับการทำงานของระบบมาให้ ซึ่งช่วยให้มันล่มน้อยลง จากการเปิดตัวของทั้ง 2 ระบบปฏิบัติการ ทั้งรุ่น 95 และ 98 ทำให้ Windows ขึ้นแท่นเป็นระบบปฏิบัติการที่มีผู้ใช้มากที่สุดในโลกอย่างรวดเร็ว
    </p>
  </p>

  <p class="articales">
    <b>Windows 98 SE (1999)</b>
    <p class="center"><img src="./assets/images/articles/Windows98SE.jpg" class="responsive3" /></p>
    <p class="articales">
    จากนั้นไม่นาน Microsoft ก็ได้ออกรุ่นปรับปรุง เพื่อแก้ไขบั๊กต่างๆ นั่นคือ Windows 98 SE รวมถึงการเพิ่มโปรแกรมทางด้านมัลติมีเดียคู่บุญอย่าง Windows Media Player และมีการอัพเกรด Internet explorer และ DirectX เป็นเวอร์ชัน 6.1 ด้วย Windows 98 SE ถือว่าเป็นระบบปฏิบัติการพื้นฐาน DOS ที่ดีที่สุดของ Microsoft แม้ปัจจุบันจะไม่มีการสนับสนุนนจากบริษัทแม่ แต่ยังมีผู้ใช้งานที่ชื่นชอบ ยังคงออกตัวปรับปรุงประสิทธิภาพให้อยู่
    </p>
  </p>

  <p class="articales">
    <b>Windows 2000 (1999)</b>
    <p class="center"><img src="./assets/images/articles/Windows2000.png" class="responsive3" /></p>
    <p class="articales">
      2 สัปดาห์ก่อนถึงปี 2000 Microsoft ได้เปิดตัว Windows 2000 โดยเน้นทางด้านการทำงานเซิร์ฟเวอร์ แต่ฟีเจอร์ที่มีใน Windows 98 ก็ยังมาอยู่ใน Windows 2000 ด้วยนะ Windows 2000 ได้เพิ่มระบบความปลอดภัยมากขึ้น และมีรองรับการเล่นเกมที่ดีขึ้นกว่า NT 4.0 อย่างไรก็ตาม มันก็ยังเหมาะกับการใช้งานในเครื่องเซิร์ฟเวอร์อยู่ดี เพราะมันกินสเปคค่อนข้างสูงกว่า Windows 98 "แม้จะพยายามปรับให้มันกินสเปคน้อยลง และสมเหตุสมผลกว่า NT 4.0"
    </p>
  </p>

  <p class="articales">
    <b>Windows Millennium Edition หรือ Windows ME (2000)</b>
    <p class="center"><img src="./assets/images/articles/WindowsME.jpg" class="responsive3" /></p>
    <p class="articales">
      Windows ME เป็นระบบปฏิบัติการพื้นฐาน DOS ตัวสุดท้ายของ Microsoft ซึ่งทางบริษัท ได้จำกัดการเข้าใช้งาน DOS-mode ในระบบปฏิบัติการ เพื่อเหตุผลทางด้านความเสถียรในการใช้งาน ทว่านี้ถือว่าเป็นข้อผิดพลาดอย่างหนึ่งของ Windows ME เนื่องจากมีหลายโปรแกรมที่ต้องใช้งาน DOS ส่งผลให้โปรแรกมเหล่านั้นไม่สามารถทำงานได้ หรือไม่สมบูรณ์ ผมเพิ่มเติมให้อีกเล็กน้อย สาเหตุที่ Windows ME น่าจะได้รับความนิยมน้อยอีกอย่างหนึ่งคือ ปัญหาในเรื่องไดรเวอร์ แม้ว่ามันจะมีพื้นฐานจาก Windows 98 แต่กลับเปลี่ยนไปใช้โครงสร้างไดรเวอร์เหมือน Windows 2000 ส่งผลให้การทำงานไดรเวอร์ไม่ค่อยมีประสิทธิภาพเท่าที่ควร
    </p>
  </p>

  <p class="articales">
    <b>Windows XP (2001)</b>
    <p class="center"><img src="./assets/images/articles/WindowsXP.jpg" class="responsive3" /></p>
    <p class="articales">
      คิดว่าน่าจะพอรู้จัก Windows XP กันเกือบทั้งหมด มันเปิดตัวในเดือนสิงหาคม ปี 2001 โดย Microsoft ได้พัฒนาระบบด้วยพื้นฐาน NT และให้มันเป็นระบบปฏิบัติการที่ใช้งานได้ทั้งผู้ใช้ทั่วไป และกลุ่มธุรกิจ "แต่ไม่มีโปรแกรมที่เกี่ยวข้องกับการทำเซิร์ฟเวอร์ติดมาให้นะ ถ้าจะใช้เซิร์ฟเวอร์จริงจัง ต้องใช้ Windows Server" Windows XP มีความเสถียรมากกว่ารุ่นก่อนๆ มาก มีการทำงานที่รวดเร็ว พร้อมกับหน้าตาการใช้งานที่เรียบง่าย อีกทั้งยังรองรับฮาร์ดแวร์มากมาย พูดได้เลยว่า มันคือหนึ่งในระบบปฏิบัติการที่ดีที่สุดของ Microsoft แม้จะเปิดตัวมานานแล้ว แต่ปัจจุบันก็ยังเห็นว่ามีคนใช้กันอยู่บ้าง
    </p>
  </p>

  <p class="articales">
    <b>Windows Vista (2006)</b>
    <p class="center"><img src="./assets/images/articles/WindowsVista.png" class="responsive3" /></p>
    <p class="articales">
      หลังจาก Windows XP ครองตำแหน่งมาได้หลายปี ในปี 2006 Microsoft ได้เปิดตัว Windows Vista โดยมีการปรับปรุงในเรื่องของอินเตอร์เฟสให้สวยงามมากขึ้น พร้อมกับระบบความปลอดภัยให้กับ Windows Vista แต่มันคือจุดที่เป็นข้อครหาให้กับ Windows Vista นั่นเอง เนื่องจากการต้องการความปลอดภัยสูง โปรแกรมที่รันบน Windows Vista จะอยู่ในโหมดที่ไม่ใช่ Administrator ทำให้การทำงานของโปรแกรมอาจไม่สมบูรณ์เท่าที่ควร และเมื่อมีการปรับแต่งการตั้งค่าอะไร จะต้องถามถึงการเข้าใช้งานในส่วน Administrator ตลอด นอกจากนี้ ในช่วงนั้นคอมพิวเตอร์ยังติดอยู่สเปคเดิมของ Windows XP ทำให้คอมสเปคเดิมๆ ไม่สามารถรัน Windows Vista ได้อย่างดีเท่าไรนัก จริงๆ มันไม่ได้ผิดที่ตัวระบบปฏิบัติการนะ แต่มันต้องการคอมแรงๆ ไว้รันเท่านั้นเอง ซึ่งในสมัยนั้นมันถือว่าเป็นสเปคที่สูงพอสมควร ผลสุดท้ายคือ Windows Vista ก็แห้วไป ไม่ได้ดังเท่า Windows XP
    </p>
  </p>

  <p class="articales">
    <b>Windows 7 (2009)</b>
    <p class="center"><img src="./assets/images/articles/Windows7.jpg" class="responsive3" /></p>
    <p class="articales">
      จากข้อผิดพลาดของ Windows Vista ได้มีการปรับปรุงใหม่ใน Windows 7 ซึ่งออกตามหลังมาถึง 3 ปี " ในช่วงนั้นก็เลยยังใช้ Windows XP กันอยู่ " ซึ่ง Microsoft ก็ยังเน้นในเรื่องความปลอดภัย แต่ลดข้อจำกัดบางอย่างลงบ้าง โดยโปรแกรมหลายๆ อย่างก็ยังมีการถามถึงการเข้าใช้ในส่วน Administrator แต่ประสิทธิภาพในการทำงานของมันกลับสูงขึ้นกว่า Windows Vista เยอะเลยทีเดียว " ส่วนหนึ่งมาจาก Windows 7 รองรับคำสั่ง AVX ในซีพียูรุ่นใหม่ด้วยนั่นเอง " Windows 7 เป็นระบบปฏิบัติการที่ประสบความสำเร็จเป็นอันดับสองรองจาก Windows XP ด้วยประสิทธิภาพในการทำงานที่ดีเยี่ยม ทำให้ต่อมามันมีผู้ใช้งานมากกว่า Windows XP เป็นที่เรียบร้อย " มาจากการผลักดันจาก Microsoft ด้วยแหละ "
    </p>
  </p>

  <p class="articales">
    <b>Windows 8 (2012)</b>
    <p class="center"><img src="./assets/images/articles/Windows8.png" class="responsive3" /></p>
    <p class="articales">
      Microsoft เริ่มเข้าสู่ตลาดการแข่งขันระบบปฏิบัติการ ทั้งเครื่องเดสก์ทอป และอุปกรณ์พกพา โดยเฉพาะกลุ่มแทบเล็ต Windows 8 จึงมีอินเตอร์เฟสที่แตกต่างไปจาก Windows รุ่นก่อนๆ โดยสิ้นเชิง เมื่อเปิดคอมขึ้นมา จะพบกับหน้าจอที่เรียกว่า Metro UI ซึ่งมีตารางโปรแกรมและแอพลิเคชันเรียงกันเป็นตับ สำหรับกลุ่มที่ใช้งานในแทบเล็ตพบว่ามันช่วยให้ใช้งานได้ง่ายขึ้น แต่ในกลุ่มเดสก์ทอป มันกลับเป็นเรื่องที่ยุ่งยาก โดยเฉพาะการทำงานแบบ Multitasking เพราะฉะนั้น Windows 8 ก็ยังไม่ประสบความสำเร็จเท่าที่ควร
    </p>
  </p>

  <p class="articales">
    <b>Windows 8.1 (2013)</b>
    <p class="center"><img src="./assets/images/articles/Windows8_1.png" class="responsive3" /></p>
    <p class="articales">
      ต่อมา Microsoft ได้ปล่อยตัวอัพเดต Windows 8.1 ให้ผู้ใช้งาน Windows 8 ได้อัพเดตไปใช้กันฟรีๆ โดยมีการปรับปรุงส่วนสำคัญจาก Windows 8 เดิม นั่นคือการนำ Start bar กลับมา อย่างไรก็ตาม มันก็ไม่สามารถทำลายสถิติของ Windows 7 ได้
    </p>
  </p>

  <p class="articales">
    <b>Windows 10 (2015)</b>
    <p class="center"><img src="./assets/images/articles/Windows10.jpg" class="responsive3" /></p>
    <p class="articales">
      และสุดท้าย กับระบบปฏิบัติการ Windows 10 ที่ได้นำ Start bar กลับมาใช้งานอย่างเต็มที่ ผสมผสานกับ Metro UI ซึ่งแฝงอยู่ในส่วนของ Start menu พร้อมด้วยฟีเจอร์ใหม่ๆ อย่าง Cortana เปรียบเสมือนผู้ช่วยใน Windows 10 สามารถใช้งานการสั่งการด้วยเสียง และรองรับการทำงานร่วมกับโปรแกรมอีกมากมาย นอกจากนี้ยังมีการปรับเปลี่ยนจาก Internet Explorer เป็น Microsoft Edge ซึ่งมันก็ทำงานได้เร็วขึ้นกว่าเดิมพอสมควรเลย อย่างไรก็ตาม มีข้อถกเถียงกันถึงเรื่องความเป็นส่วนตัวใน Windows 10 เนื่องจากมีผู้ใช้งานพบว่า ระบบปฏิบัติการจะรวบรวมข้อมูลการใช้งาน แล้วส่งไปให้ Microsoft ก็ไม่รู้ว่าเขาจะเอาไปทำอะไร คิดในแง่ดีไว้ว่าเอาไปปรับปรุงเรื่องการให้บริการ และประสิทธิภาพของระบบปฏิบัติการ
    </p>
  </p>
</p>
    `
  },
  {
    id: 4,
    name: 'กำเนิดภาษางูหลาม',
    img: './assets/images/articles/Python.png',
    description: 'บทความนี้จะพูดถึงภาษา Python และหลักการทำงานของภาษานี้',
    data: `
<p class="center"><img src="./assets/images/articles/Python.png" class="responsive2" /></p>

<p class="articales">
  ภาษาไพธอน เป็นการเขียนโปรแกรมที่พัฒนามาจากภาษา C++ ซึ่งภาษาไพธอนจะเป็นการปรับเปลี่ยนรูปแบบการเขียนทำให้ผู้เขียนโปรแกรมสามารถสร้างงานได้ง่ายยิ่งขึ้น แล้วภาษาไพธอนเกิดขึ้นได้อย่างไรเรามารู้จักภาษาไพธอนกัน
</p>

<p class="articales">
  ภาษาไพธอนถูกออกแบบและพัฒนาโดย <b><u>กีโด ฟาน รอสซัม</u></b> ชาวเนเธอร์แลนด์ เริ่มคิดค้นออกแบบมาตั้งแต่ช่วงปลายปี ค.ศ. 1989 แล้วจึงปล่อยเวอร์ชั่นทดลองมาให้ผู้ใช้งานได้มาทดลองใช้ในเดือนกุมภาพันธ์ ปี ค.ศ. 1991 จนถึงเดือนมกราคมในปี ค.ศ. 1994 จนกระทั่งได้ปล่อยเวอร์ชั่นไพธอน(Python)ออกมาเป็นเวอร์ชั่นแรก หลังจากนั้นได้ทำการปรับปรุงและพัฒนาโปรแกรมมาเรื่อย ๆ จนกระทั่งถึงเสอร์ชั่นล่าสุดคือ เวอร์ชั่น 3.7.4 ซึ่งปล่อยเมื่อเดือนมกราคมของปีที่แล้วนี่เอง โปรแกรมไพธอนมาสารถใช้งานได้กับทุก ๆ ระบบปฏิบัติการไม่ว่าจะเป็นปฏิบัติการลินุกซ์(Linux) ปฏิบัติการแม็ค โอ เอส เอ็กซ์ (Max OS X) และระบบปฏิบัติการวินโดวส์ (Windows) ซึ่งมีไลบารีที่ประกอบไปด้วยฟังก์ชั่นสำเร็จรูปต่างๆที่จำเป็นต่อการเขียนโปรแกรมเป็นอย่างมาก
  <p class="center"><img src="./assets/images/articles/Python3.jpg" class="responsive2" /></p>
</p>

<p class="articales">
  โดยโปรแกรมไพธอนเป็นโปรแกรมที่ต้องแปล (Interpreted language) ซึ่งจะใช้ตัวแปลภาษา (Interpreter) โดยจะทำการประมวลคำสั่งที่ละหนึ่งบรรทัด และถ้าหากเกิดข้อผิดพลาดระบบจะทำการแจ้งเตือนทันที โดยตังแปลภาษาจะมีด้วยกันหลายตัวคือ IDLE, THONNY ,SPYDER ,PYCHARM, RODEO, ATOM ,VISUAL STUDIO CODE และ ERIC เป็นต้น  ซึ่งจะยกตัวอย่างให้ดูก็คือ IDLE และ Thonny
</p>

<p class="articales">
  <ul>
    <li>
      <b>โปรแกรม IDLE</b> โดยจะทำการติดตั้งอัตโนมัติเมื่อลงโปรแกรม Python 3.7.4 โดยโปรแกรม  IDLE จะมีอยู่ 2 หน้าต่างหลัก ๆ อยู่ 2 หน้าต่างคือหน้าต่างเซลล์ จะทำหน้าที่แปลภาษาและแสดงผลการรันของโปรแกรมและหน้าต่างอิดิเตอร์ ใช้ในการเขียนโปรแกรมและบันทึกหลายหน้าต่างได้ในขณะเดียวกัน
      <p class="center"><img src="./assets/images/articles/Python1.png" class="responsive3" /></p>
    </li>
    <li>
      <b>Thonny</b> มาพร้อมกับไลบารีชองไพธอน 3.7.4 ซึ่งโปรแกรมไพธอนจะมีหน้าต่างเดียว และประกอบไปด้วย 3 หน้าต่างย่อยคือ หน้าต่างอิดิเตอร์ หน้าต่างเซลล์และหน้าต่างช่วยเหลือ
      <p class="center"><img src="./assets/images/articles/Python2.png" class="responsive3" /></p>
    </li>
  </ul>
</p>
  `
  },
];

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles_array = articles
  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-articles-data',
  templateUrl: './articles_data.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticlesDetaComponent implements OnInit {
  article_id: Number = 0;
  article_data: any = new Array()
  found_data = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.article_id = Number(this.route.snapshot.paramMap.get('id'))
    this.article_data = articles.find((act) => { return this.article_id == act.id })
    if (this.article_data != undefined) {
      this.found_data = true;
    } else {
      this.found_data = false;
    }
  }

}
