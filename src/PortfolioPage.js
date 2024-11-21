
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Проєкт 1",
          description: "Опис Проєкту 1.",
          link: "https://project1.com",
          backgroundImage: "url('https://example.com/site_5.png')", 
        },
        {
          id: 2,
          title: "Проєкт 2",
          description: "Опис Проєкту 2.",
          link: "https://project2.com",
        },
        {
          id: 3,
          title: "Проєкт 3",
          description: "Опис проекту 3.",
          link: "https://project3.com",
        },
        {
          id: 4,
          title: "Проєкт 4",
          description: "Опис Проєкту 4.",
          link: "https://project4.com",
        },
        {
          id: 5,
          title: "Проєкт 5",
          description: "Опис Проєкту 5.",
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
