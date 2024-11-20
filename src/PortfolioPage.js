
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Проект 1",
          description: "Опис проекту 1.",
          link: "https://project1.com",
          backgroundImage: "url('https://example.com/site_5.png')", 
        },
        {
          id: 2,
          title: "Проект 2",
          description: "Опис проекту 2.",
          link: "https://project2.com",
        },
        {
          id: 3,
          title: "Проект 3",
          description: "Опис проекту 3.",
          link: "https://project3.com",
        },
        {
          id: 4,
          title: "Проект 4",
          description: "Опис проекту 4.",
          link: "https://project4.com",
        },
        {
          id: 5,
          title: "Проект 5",
          description: "Опис проекту 5.",
          link: "https://project5.com",
        },
        {
          id: 6,
          title: "+",
        },
      ],
    };
  },
  methods: {
    showMessage() {
      alert("Це спеціальний елемент для додавання нового проекту!");
    },
  },
};
