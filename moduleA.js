
export default () => {
  const a = { exited: () => { console.log('moduleA: hello!')} };
  a.exited(); a.methodNotExisted();
}
