/* Static course map: the sidebar never depends on the local lesson folder. */
const COURSE_DATA = {
  title: "Business English for IT Meetings",
  totalLessons: 24,
  lessonsPerModule: 4,   // pace: one new lesson per study night, a module takes at most 4 days
  // Reflex target (average ms from end of question to start of answer) a lesson must reach to count as passed.
  targetMsByModule: { 1: 3000, 2: 3000, 3: 2500, 4: 2500, 5: 2000, 6: 2000 },
  modules: [
    { number: 1, name: "Surviving the Meeting", goal: "Sống sót qua một buổi meeting cơ bản — nghe hiểu câu hỏi quen thuộc, đưa ra update ngắn.", level: "1", lessons: [
      { number: 1, title: "Daily Stand-up", completed: false },
      { number: 2, title: "Giving a Work Update", completed: false },
      { number: 3, title: "Asking for Clarification", completed: false },
      { number: 4, title: "Talking About Blockers", completed: false }
    ]},
    { number: 2, name: "Working With Requirements", goal: "Hiểu và thảo luận requirement, không chỉ báo cáo task.", level: "1 → 2", lessons: [
      { number: 5, title: "Understanding Requirements", completed: false },
      { number: 6, title: "Asking Requirement Questions", completed: false },
      { number: 7, title: "Discussing Scope & Changes", completed: false },
      { number: 8, title: "Confirming Understanding", completed: false }
    ]},
    { number: 3, name: "Technical Discussion", goal: "Xử lý thảo luận kỹ thuật — bug, code review, Git, backend/frontend.", level: "2", lessons: [
      { number: 9, title: "Bugs & QA", completed: false },
      { number: 10, title: "Code Review", completed: false },
      { number: 11, title: "Git - GitHub", completed: false },
      { number: 12, title: "Backend - Frontend Discussion", completed: false }
    ]},
    { number: 4, name: "Delivery & Project Progress", goal: "Trao đổi về deploy, tiến độ, ETA, rủi ro dự án.", level: "2 → 3", lessons: [
      { number: 13, title: "Staging & Testing", completed: false },
      { number: 14, title: "Deployment", completed: false },
      { number: 15, title: "ETA - Timeline", completed: false },
      { number: 16, title: "Project Status", completed: false }
    ]},
    { number: 5, name: "Client & Team Communication", goal: "Giao tiếp với client — trả lời câu hỏi, giải thích kỹ thuật, phản đối lịch sự, xử lý câu hỏi bất ngờ.", level: "3 → 4", lessons: [
      { number: 17, title: "Client Questions", completed: false },
      { number: 18, title: "Explaining Technical Issues", completed: false },
      { number: 19, title: "Disagreement & Negotiation", completed: false },
      { number: 20, title: "Handling Unexpected Questions", completed: false }
    ]},
    { number: 6, name: "Real Meeting Simulation", goal: "Tham gia một buổi meeting thực tế — nhiều chủ đề, nhiều người nói, không đoán trước được.", level: "3 → 4", lessons: [
      { number: 21, title: "Multi-topic Meeting", completed: false },
      { number: 22, title: "Difficult Client Meeting", completed: false },
      { number: 23, title: "Technical + Business Meeting", completed: false },
      { number: 24, title: "Full Project Meeting", completed: false }
    ]}
  ]
};

COURSE_DATA.lessons = COURSE_DATA.modules.flatMap(module =>
  module.lessons.map(lesson => ({
    ...lesson,
    id: `L${String(lesson.number).padStart(2, "0")}`,
    module: module.number,
    moduleName: module.name,
    level: module.level,
    targetMs: COURSE_DATA.targetMsByModule[module.number],
    folderName: "",
    files: {}
  }))
);
