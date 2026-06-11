export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};