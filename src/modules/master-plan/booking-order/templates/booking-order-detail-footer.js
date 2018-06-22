export class DetailFooter {
  activate(context) {
    this.context = context;
    console.log(this.context);
    // this.colspan = this.context.options.readOnly ? 5 : 4;
    this.colspan = 5;
  }

  get itemSum() {
    var qty = this.context.items
      .filter(item => !item.data.isCanceled) // for false and undefined
      .map(item => item.data.Total);
    return qty.reduce((prev, curr, index) => {
      return prev + curr;
    }, 0);
  }
}
