module.exports = {
  // 可选提交类型
  types: [
    { value: 'feat', name: 'feat:    新功能' },
    { value: 'fix', name: 'fix:    修复bug' },
    { value: 'docs', name: 'docs:    文档变更' },
    { value: 'style', name: 'style:    代码格式' },
    { value: 'refactor', name: 'refactor:    重构' },
    { value: 'perf', name: 'perf:    性能优化' },
    { value: 'test', name: 'test:    测试' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具变动' },
    { value: 'revert', name: 'revert:    回退' },
    { value: 'build', name: 'build:    打包' },
  ],
  message: {
    type: '请选择提交类型: ',
    customScope: '请输入修改的范围(可选): ',
    subject: '请简述提交内容(必填): ',
    body: '请输入详细提交内容(可选): ',
    footer: '请输入要关闭的issue(可选): ',
    confirmCommit: '确认是否使用以上信息提交?(y/n/e/h)',
  },
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72,
}
