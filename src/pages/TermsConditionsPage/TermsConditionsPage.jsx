// Terms and Conditions Page Component
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { helmetConfig } from '../../utils/helmet';
import styles from './TermsConditionsPage.module.css';

const TermsConditionsPage = () => {
  useSEO({
    title: 'Terms and Conditions - Shankar Multimedia',
    description: 'Terms and Conditions of use for Shankar Multimedia services. Read our legal terms and conditions.',
    keywords: 'terms and conditions, terms of use, legal terms, user agreement',
    url: 'https://www.shankarmultimedia.com/terms-conditions',
  });

  return (
    <motion.div
      className={styles.termsPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Terms and Conditions</h1>
          <p>Last Updated: January 2026</p>
        </div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Interpretation and Definitions */}
          <section className={styles.section}>
            <h2>Interpretation and Definitions</h2>
            
            <h3>Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3>Definitions</h3>
            <p>For the purposes of these Terms and Conditions:</p>
            <ul className={styles.list}>
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Shankar Multimedia, an educational institution located in Mumbai, Maharashtra, India.</li>
              <li><strong>Courses</strong> refers to the offline educational courses, programs, training sessions, workshops, and classes conducted by the Company at its physical premises in Mumbai.</li>
              <li><strong>Country</strong> refers to: India</li>
              <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
              <li><strong>Educational Services</strong> means all offline educational programs, courses, training, workshops, certifications, and related educational activities provided by the Company.</li>
              <li><strong>Enrollment</strong> means the process of registering for and being admitted to any of the Company's offline courses or programs.</li>
              <li><strong>Service</strong> refers to the Website and the Educational Services offered by the Company.</li>
              <li><strong>Student</strong> means any individual who has enrolled in or is attending any of the Company's offline courses or programs.</li>
              <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service and enrollment in Educational Services.</li>
              <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
              <li><strong>Website</strong> refers to Shankar Multimedia, accessible from www.shankarmultimedia.com</li>
              <li><strong>You</strong> means the individual accessing or using the Service, enrolling in courses, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
          </section>

          {/* Acknowledgment */}
          <section className={styles.section}>
            <h2>Acknowledgment</h2>
            <p>
              These are the Terms and Conditions governing the use of this Service, enrollment in our offline educational courses, and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users and students regarding the use of the Service and participation in our Educational Services.
            </p>
            <p>
              Your access to and use of the Service, as well as enrollment in any offline courses or programs, is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users, prospective students, enrolled students, and others who access or use the Service or participate in our Educational Services.
            </p>
            <p>
              By accessing or using the Service, enrolling in any course, or attending any classes at our Mumbai premises, You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service or enroll in our courses.
            </p>
            <p>
              You represent that you are over the age of 18, or if you are under 18, that you have obtained parental or guardian consent to enroll in our courses and use our services. For students under the age of 18, a parent or legal guardian must agree to these Terms on behalf of the student.
            </p>
          </section>

          {/* Use of Services */}
          <section className={styles.section}>
            <h2>Use of Services and Course Enrollment</h2>
            <p>
              You agree to use our Services and participate in our offline educational courses only for lawful purposes and in accordance with these Terms and Conditions. You must not use the Service or participate in our Educational Services:
            </p>
            <ul className={styles.list}>
              <li>In any way that violates any applicable law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
              <li>To impersonate or attempt to impersonate any person or entity</li>
              <li>In any way that infringes upon the rights of others, or in any way illegal, threatening, fraudulent or harmful</li>
              <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service or disrupts the educational environment</li>
              <li>To reproduce, duplicate, copy, distribute, or sell any course materials, educational content, or any part of the Service without Our prior written consent</li>
              <li>To record, photograph, or video any classes, lectures, or educational sessions without explicit written permission from the Company</li>
              <li>To share or distribute course materials, notes, recordings, or any proprietary educational content with non-enrolled individuals</li>
              <li>To attempt to hack, breach, or gain unauthorized access to the Company's website, systems, or servers by any means, including but not limited to brute force attacks, malicious code, or social engineering</li>
              <li>To forge, tamper with, or falsify any content, data, credentials, enrollment documents, certificates, or communications on the Service or impersonate the Company</li>
              <li>To reverse engineer, decompile, or attempt to discover the source code, underlying algorithms, or technical infrastructure of the Website or Service through any means</li>
              <li>To use automated tools, bots, scrapers, or any other technology to access the Service without Our explicit written permission</li>
              <li>To interfere with the normal operation, security, or integrity of the Service's infrastructure or systems</li>
            </ul>
            
            <h3>Course Enrollment and Attendance</h3>
            <p>
              <strong>Enrollment:</strong> Enrollment in any offline course requires submission of accurate and complete registration information. False or misleading information may result in immediate termination of enrollment without refund.
            </p>
            <p>
              <strong>Attendance:</strong> Students are expected to maintain regular attendance as specified in the course curriculum. The Company reserves the right to deny course completion certificates or other benefits to students who fail to meet minimum attendance requirements.
            </p>
            <p>
              <strong>Code of Conduct:</strong> All students must maintain appropriate conduct at our Mumbai premises, respect faculty and fellow students, and comply with all institute rules and regulations. Violation of conduct rules may result in suspension or expulsion from courses.
            </p>
            <p>
              <strong>Payment Terms:</strong> Course fees must be paid as per the payment schedule provided at the time of enrollment. Non-payment may result in suspension of access to classes and educational services. 
            </p>
            <p>
              <strong>Refund Policy:</strong> Refunds, if applicable, will be processed as per the refund policy communicated at the time of enrollment and in accordance with applicable consumer protection laws in India.
            </p>
          </section>

          {/* Intellectual Property Rights */}
          <section className={styles.section}>
            <h2>Intellectual Property Rights</h2>
            <p>
              All content on our website and Services, including but not limited to text, graphics, logos, button icons, images, audio clips, video clips, digital downloads, data compilations, course materials, study guides, lecture notes, educational content, presentations, assignments, curriculum, software, design elements, and the compilation thereof (collectively, "Content"), are the exclusive property of Shankar Multimedia or our licensors and content providers.
            </p>
            <p>
              The Content is protected by Indian and international copyright laws under the Copyright Act, 1957, trademark laws under the Trade Marks Act, 1999, and other intellectual property laws and treaties. The arrangement and compilation of all Content on this Service and all educational materials is the exclusive property of Shankar Multimedia and is protected by Indian copyright law.
            </p>
            <p>
              <strong>Trademarks:</strong> "Shankar Multimedia" and all related names, logos, product and service names, designs, and slogans are trademarks of Shankar Multimedia or its affiliates or licensors. You must not use such marks without the prior written permission of Shankar Multimedia. All other names, logos, product and service names, designs, and slogans on this Service are the trademarks of their respective owners.
            </p>
            <p>
              <strong>Course Materials:</strong> All course materials provided during offline classes, including but not limited to handouts, study materials, assignments, projects, and any educational content, remain the intellectual property of Shankar Multimedia. Students are granted a limited, non-transferable, non-exclusive license to use these materials solely for personal educational purposes during their enrollment period.
            </p>
            <p>
              <strong>Restrictions:</strong> You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service or course materials, except as follows:
            </p>
            <ul className={styles.list}>
              <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
              <li>You may store files that are automatically cached by your web browser for display enhancement purposes</li>
              <li>You may print or download one copy of course materials provided to you for your own personal, non-commercial educational use and not for further reproduction, publication, or distribution</li>
              <li>You may take personal notes during classes for your own study purposes, but may not reproduce or distribute such notes commercially</li>
            </ul>
            <p>
              <strong>Prohibited Uses:</strong> Students and website users expressly agree not to:
            </p>
            <ul className={styles.list}>
              <li>Record, photograph, or videograph any classes, lectures, or training sessions without explicit written permission</li>
              <li>Share, sell, or distribute course materials, lecture recordings, or educational content to any third party</li>
              <li>Upload course materials to any online platform, file-sharing service, or social media</li>
              <li>Use course materials for commercial purposes or competitive activities</li>
              <li>Create or distribute derivative works based on course content</li>
            </ul>
            <p>
              Any unauthorized use of the Content or course materials may violate copyright, trademark, and other laws of India and may subject you to civil and criminal penalties under the Copyright Act, 1957, the Trade Marks Act, 1999, the Information Technology Act, 2000, and the Bharatiya Nyaya Sanhita, 2023. Shankar Multimedia reserves the right to pursue legal action and claim damages for any unauthorized use or infringement of its intellectual property.
            </p>
          </section>

          {/* Links to Other Websites */}
          <section className={styles.section}>
            <h2>Links to Other Websites</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
            </p>
            <p>
              The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
            <p>
              We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
            </p>
          </section>

          {/* Termination */}
          <section className={styles.section}>
            <h2>Termination and Suspension</h2>
            <p>
              <strong>By the Company:</strong> We may terminate or suspend Your access to the Service and/or Your enrollment in any course immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You:
            </p>
            <ul className={styles.list}>
              <li>Breach these Terms and Conditions</li>
              <li>Fail to make timely payment of course fees</li>
              <li>Engage in misconduct or disruptive behavior at our premises or during classes</li>
              <li>Violate our code of conduct or institute rules</li>
              <li>Provide false or misleading information during enrollment</li>
              <li>Infringe on the intellectual property rights of the Company</li>
              <li>Engage in activities that harm the reputation of the institute or other students</li>
            </ul>
            <p>
              <strong>Effect of Termination:</strong> Upon termination or suspension:
            </p>
            <ul className={styles.list}>
              <li>Your right to use the Service and attend classes will cease immediately</li>
              <li>You must immediately cease using all course materials and return any physical materials provided by the institute</li>
              <li>You must delete or destroy all copies of course materials in your possession</li>
              <li>You will not be eligible for course completion certificates or any other benefits</li>
              <li>Any fees paid are non-refundable except as provided in our refund policy or required by law</li>
            </ul>
            <p>
              Termination does not affect rights and obligations that have accrued prior to termination, including payment obligations and confidentiality obligations.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className={styles.section}>
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted under applicable Indian law, including but not limited to the Indian Contract Act, 1872, the Consumer Protection Act, 2019, and the Information Technology Act, 2000, Shankar Multimedia shall not be liable for any loss, damage, injury, delay, inconvenience, or disruption arising out of or in connection with:
            </p>
            <ul className={styles.list}>
              <li>Admission, enrollment, or denial of admission to any course or program</li>
              <li>Attendance, participation, or non-participation in any offline course, program, training, workshop, or related educational activity</li>
              <li>Completion, non-completion, or cancellation of any course or program</li>
              <li>Quality or outcomes of educational services provided</li>
              <li>Employment opportunities or career advancement following course completion</li>
              <li>Interaction with faculty, staff, or other students at our Mumbai premises</li>
              <li>Use of facilities, equipment, or resources at our institute</li>
              <li>Any changes to course schedules, curriculum, or faculty assignments</li>
            </ul>
            <p>
              Without prejudice to the foregoing, Shankar Multimedia shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including but not limited to loss of income, loss of opportunity, loss of data, loss of employment prospects, emotional distress, or any other non-direct loss, whether arising in contract, tort, negligence, or otherwise, as permitted under the Indian Contract Act, 1872 and other applicable laws of India.
            </p>
            <p>
              The Company shall further not be liable for any damages or losses arising from:
            </p>
            <ul className={styles.list}>
              <li>Unauthorized access to the Service, hacking attempts, data breaches caused by cyber attacks, or any security incidents beyond the Company's reasonable control, subject to the Company's obligations under the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
              <li>Force majeure events including natural disasters, pandemics, government orders, strikes, or other events beyond the Company's reasonable control that prevent or delay the delivery of educational services</li>
              <li>Accidents, injuries, or health issues occurring on institute premises, except where caused by gross negligence or willful misconduct of the Company</li>
              <li>Loss or damage to personal property brought to institute premises</li>
              <li>Interruptions or delays in course delivery due to technical issues, facility maintenance, or other operational requirements</li>
            </ul>
            <p>
              Any liability of Shankar Multimedia which cannot be excluded or limited under applicable Indian law shall be limited strictly to the minimum extent mandatorily required under such law, including provisions of the Consumer Protection Act, 2019, where applicable.
            </p>
          </section>

          {/* "AS IS" and "AS AVAILABLE" Disclaimer */}
          <section className={styles.section}>
            <h2>"AS IS" and "AS AVAILABLE" Disclaimer</h2>
            <p>
              The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice.
            </p>
            <p>
              Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
            </p>
            <p>
              Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
            </p>
          </section>

          {/* Governing Law */}
          <section className={styles.section}>
            <h2>Governing Law and Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. The following Indian laws shall specifically apply to these Terms and your use of the Service:
            </p>
            <ul className={styles.list}>
              <li>The Information Technology Act, 2000 and rules thereunder</li>
              <li>The Indian Contract Act, 1872</li>
              <li>The Bharatiya Nyaya Sanhita (BNS), 2023</li>
              <li>The Consumer Protection Act, 2019 (where applicable)</li>
              <li>The Copyright Act, 1957</li>
              <li>The Trade Marks Act, 1999</li>
              <li>All other applicable laws, regulations, and rules of India</li>
            </ul>
            <p>
              <strong>Exclusive Jurisdiction:</strong> All disputes, claims, complaints, causes of action, or legal proceedings of any nature whatsoever arising out of or relating to these Terms and Conditions, your use of the Service, or the relationship between you and Shankar Multimedia shall be exclusively subject to the jurisdiction of the competent courts located in Mumbai, Maharashtra, India.
            </p>
            <p>
              You hereby irrevocably and unconditionally:
            </p>
            <ul className={styles.list}>
              <li>Submit to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India</li>
              <li>Agree that the courts in Mumbai, Maharashtra shall have sole and exclusive jurisdiction to hear and determine any suit, action, or proceedings arising out of or in connection with these Terms</li>
              <li>Waive any objection to proceedings in such courts on the grounds of venue or on the grounds that proceedings have been brought in an inconvenient forum</li>
              <li>Agree not to commence any action, suit, or proceeding in any jurisdiction other than Mumbai, Maharashtra, India</li>
            </ul>
            <p>
              <strong>Service of Legal Notice:</strong> Any legal notice, summons, or court documents may be served at the registered address of Shankar Multimedia in Mumbai, Maharashtra, India, or at info@shankarmultimedia.com as per applicable Indian laws.
            </p>
          </section>

          {/* Severability and Waiver */}
          <section className={styles.section}>
            <h2>Severability and Waiver</h2>
            
            <h3>Severability</h3>
            <p>
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
            </p>

            <h3>Waiver</h3>
            <p>
              Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className={styles.section}>
            <h2>Changes to These Terms and Conditions</h2>
            <p>
              We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at Our sole discretion.
            </p>
            <p>
              By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
            </p>
          </section>

          {/* Contact Us */}
          <section className={styles.section}>
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, You can contact us at info@shankarmultimedia.com.</p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsConditionsPage;