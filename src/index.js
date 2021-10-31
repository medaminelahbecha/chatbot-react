import ReactDOM from "react-dom";
import "./styles.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

class Review extends Component {
  render() {
    return <div style={{ width: "100%", alignItems: "center" }}></div>;
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            component: <Review />,
            asMessage: true,
            trigger: "questions",
          },
          {
            id: "questions",
            message: " مرحبا هل تريد طرح أي سؤال",
            trigger: "question-number",
          },
          {
            id: "question-number",
            options: [
              { value: "yes", label: "Yes", trigger: "question-yes" },
              { value: "no", label: "No", trigger: "end-message" },
            ],
          },
          {
            id: "question-yes",
            message: "EKHTAR so2el",
            trigger: "number",
          },
          {
            id: "number",
            options: [
              {
                value: "1",
                label: "ما هي أهداف التلقيح؟",
                trigger: "question 1",
              },
              {
                value: "2",
                label: "ماذا أفعل إذا واجهت مشكلة أثناء التسجيل؟",
                trigger: "question 2",
              },
              {
                value: "3",
                label: "أين سيتم التلقيح ؟",
                trigger: "question 3",
              },
              {
                value: "4",
                label: "هل سيكون لقاح كوفيد-19 مجانيًا ؟ ",
                trigger: "question 4",
              },
              {
                value: "5",
                label: "كيف يتم التسجيل للحصول على لقاح Covid-19؟",
                trigger: "question 5",
              },
              {
                value: "6",
                label:
                  "ما هي المبادئ الرئيسية لإستراتيجية التلقيح ضد فيروس كورونا؟",
                trigger: "question 6",
              },
            ],
          },
          {
            id: "question 1",
            message:
              "الهدف الأول من التلقيح هو تقليل عدد الحالات الخطيرة من الكوفيد-19 و بالتالي عدد الوفايات، و هو ما أكدته نتائج الدراسات السريرية للقاحات التي أثبتت فاعليتها.",
            trigger: "1",
          },
          {
            id: "question 2",
            message:
              "تم إنشاء رقم مجاني للإستفسار طوال حملة التلقيح. الرقم المجاني: 80102021، مفتوح من الاثنين إلى الجمعة من منتصف الليل حتى الساعة 5 مساءً",
            trigger: "1",
          },
          {
            id: "question 3",
            message:
              "سيكون هناك 25 مركزا تلقيح جهويا و حوالي 200 مركز تلقيح جهوي يتم تحديده من قبل السلطات الجهوية حسب معاييير",
            trigger: "1",
          },
          {
            id: "question 4",
            message:
              "نعم. التلقيح سيكون مجانيا للجميع في تونس ولكن حسب الأولوية التي تحددها السلطات.",
            trigger: "1",
          },
          {
            id: "question 5",
            message:
              "الموقع: www.evax.tn ,الرسائل القصيرة: 85355 ,USSD : *2021#",
            trigger: "1",
          },
          {
            id: "question 6",
            message:
              "وضعت تونس لنفسها المبادئ التالية: الحصول المنصف و في الوقت المناسب على لقاحات مجانية وفعالة ومأمونة وعالية الجودة معتمدة من الأدلة العلمية الحرية الشخصية على أساس الشفافية و توفير المعلومة",
            trigger: "1",
          },
          {
            id: "end-message",
            message: "وداعا",
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleForm />, rootElement);
