

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),

    file: new log.handlers.FileHandler("WARNING", {
      filename: "./log.txt",
      // you can change format of output message using any keys in `LogRecord`
      formatter: "{levelName} {msg}",
    }),
  },

  loggers: {
    // configure default logger available via short-hand methods above
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },

    tasks: {
      level: "ERROR",
      handlers: ["console"],
    },
  },
});

const logger = async (ctx:any, next:any) => {
  console.log(ctx.request);
  await log.debug("Je suis un log");
  next();
};

export default logger;