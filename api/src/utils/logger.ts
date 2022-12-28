import logger from 'pino'
import dayjs from 'dayjs'

const log = logger({
  //   prettyPrint: true,
  base: {
    pid: false,
  },
  transport:
    process.env.NODE_ENV !== 'production'
      ? {
          target: 'pino-pretty',
        }
      : undefined,
  timestamp: () => `,"time":"${dayjs().format()}"`,
})

export default log
