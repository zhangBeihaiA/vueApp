
<template>
  <!-- 项目的最外层 -->
  <div class="outer">
    <!-- 商品分类导航 -->
    <TypeNav />
    <!-- 窗口侧边栏 -->
    <div class="toolbar toolbar-wrap">
      <div class="content"></div>
      <div class="but list"></div>
      <div class="toolist">
        <div class="pull">
          <i class="tab-ico vip"></i>
          <em class="tab-text">商品会员</em>
        </div>
        <div class="pull">
          <i class="tab-ico cart"></i>
          <em class="tab-text">购物车</em>
        </div>
        <div class="pull">
          <i class="tab-ico follow"></i>
          <em class="tab-text">我的关注</em>
        </div>
        <div class="pull">
          <i class="tab-ico history"></i>
          <em class="tab-text">我的足迹</em>
        </div>
        <div class="pull">
          <i class="tab-ico message"></i>
          <em class="tab-text">我的消息</em>
        </div>
        <div class="pull">
          <i class="tab-ico jimi"></i>
          <em class="tab-text">咨询</em>
        </div>
      </div>
      <div class="back pull">
        <i class="tab-ico top"></i>
        <em class="tab-text">顶部</em>
      </div>
    </div>
    <!-- 主要内容区域 -->
    <!-- <Main :goodInfo="goodInfo"></Main> -->
    <section class="con">
      <!-- 导航路径区域 -->
      <div class="conPoin">
        <a v-show="categoryView.category1Name">{{
          categoryView.category1Name
        }}</a>
        <a v-show="categoryView.category2Name">{{
          categoryView.category2Name
        }}</a>
        <a v-show="categoryView.category3Name">{{
          categoryView.category3Name
        }}</a>
      </div>
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <!--放大镜效果-->
          <Zoom :skuImageList="skuImageList" />
          <!--下方的缩略图-->
          <ImageList :skuImageList="skuImageList" />
        </div>
        <!-- 右侧选择区域布局 -->
        <div class="InfoWrap">
          <div class="goodsDetail">
            <h3 class="InfoName">
              {{ skuInfo.skuName }}
            </h3>
            <p class="news">
              {{ skuInfo.skuDesc }}
            </p>
            <div class="priceArea">
              <div class="priceArea1">
                <div class="title">
                  价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格
                </div>
                <div class="price">
                  <i>{{ skuInfo.price }}</i>
                  <em></em>
                  <span>降价通知</span>
                </div>
                <div class="remark">
                  <i>累计评价</i>
                  <!--代表的是某一个数字的多少幂-->
                  <em>222</em>
                </div>
              </div>
              <div class="priceArea2">
                <div class="title">
                  <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i>
                </div>
                <div class="fixWidth">
                  <i class="red-bg">加价购</i>
                  <em class="t-gray">333</em>
                </div>
              </div>
            </div>
            <div class="support">
              <div class="supportArea">
                <div class="title">
                  支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持
                </div>
                <div class="fixWidth">
                  以旧换新，闲置手机回收 4G套餐超值抢 礼品购
                </div>
              </div>
              <div class="supportArea">
                <div class="title">配 送 至</div>
                <div class="fixWidth">广东省 深圳市 宝安区</div>
              </div>
            </div>
          </div>

          <div class="choose">
            <div class="chooseArea">
              <div class="choosed"></div>
              <!--这里是商品销售属性的地方-->
              <dl v-for="s in spuSaleAttrList" :key="s.id">
                <dt class="title">{{ s.saleAttrName }}</dt>
                <!--每一个销售属性的属性值的地方-->
                <dd
                  changeprice="0"
                  :class="{ active: s2.isChecked == 1 }"
                  v-for="s2 in s.spuSaleAttrValueList"
                  :key="s2.id"
                  @click="changeActive(s2, s)"
                >
                  {{ s2.saleAttrValueName }}
                </dd>
              </dl>
            </div>
            <div class="cartWrap">
              <!-- 购物商品个数的操作地方 -->
              <div class="controls">
                <input class="itxt" v-model="skuNum" @change="changeSkuNum" />
                <a href="javascript:" class="plus" @click="skuNum++">+</a>
                <a
                  href="javascript:"
                  class="mins"
                  @click="skuNum > 1 ? skuNum-- : (skuNum = 1)"
                  >-</a
                >
              </div>
              <div class="add">
                <!--点击加入购物车按钮:不能用声明式导航,第一个：要发请求（有业务）-->
                <a @click="addShopCart">加入购物车</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容详情页 -->
    <section class="productDetail">
      <aside class="aside">
        <div class="tabWraped">
          <h4 class="active">相关分类</h4>
          <h4>推荐品牌</h4>
        </div>
        <div class="tabContent">
          <div class="tab-pane active">
            <ul class="partList">
              <li>手机</li>
              <li>手机壳</li>
              <li>内存卡</li>
              <li>Iphone配件</li>
              <li>贴膜</li>
              <li>手机耳机</li>
              <li>移动电源</li>
              <li>平板电脑</li>
            </ul>
            <ul class="goodsList">
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part01.png" />
                  </div>
                  <div class="attr">Apple苹果iPhone 6s (A1699)</div>
                  <div class="price">
                    <em>¥</em>
                    <i>6088.00</i>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane">
            <p>推荐品牌</p>
          </div>
        </div>
      </aside>
      <div class="detail">
        <div class="fitting">
          <h4 class="kt">选择搭配</h4>
          <div class="good-suits">
            <div class="master">
              <img src="./images/l-m01.png" />
              <p>￥5299</p>
              <i>+</i>
            </div>
            <ul class="suits">
              <li class="suitsItem">
                <img src="./images/dp01.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="39" />
                  <span>39</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp02.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="50" />
                  <span>50</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp03.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="59" />
                  <span>59</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp04.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="99" />
                  <span>99</span>
                </label>
              </li>
            </ul>
            <div class="result">
              <div class="num">已选购0件商品</div>
              <div class="price-tit">套餐价</div>
              <div class="price">￥5299</div>
              <button class="addshopcar">加入购物车</button>
            </div>
          </div>
        </div>
        <div class="intro">
          <ul class="tab-wraped">
            <li class="active">
              <a v-show="categoryView.cataegory1Name"> 商品介绍 </a>
            </li>
            <li>
              <a v-show="categoryView.cataegory1Name"> 规格与包装 </a>
            </li>
            <li>
              <a v-show="categoryView.cataegory1Name"> 售后保障 </a>
            </li>
            <li>
              <a v-show="categoryView.cataegory1Name"> 商品评价 </a>
            </li>
            <li>
              <a v-show="categoryView.cataegory1Name"> 手机社区 </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="one" class="tab-pane active">
              <ul class="goods-intro">
                <li>分辨率：1920*1080(FHD)</li>
                <li>后置摄像头：1200万像素</li>
                <li>前置摄像头：500万像素</li>
                <li>核 数：其他</li>
                <li>频 率：以官网信息为准</li>
                <li>品牌： Apple</li>
                <li>商品名称：APPLEiPhone 6s Plus</li>
                <li>商品编号：1861098</li>
                <li>商品毛重：0.51kg</li>
                <li>商品产地：中国大陆</li>
                <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                <li>系统：苹果（IOS）</li>
                <li>像素：1000-1600万</li>
                <li>机身内存：64GB</li>
              </ul>
              <div class="intro-detail">
                <img src="./images/intro01.png" />
                <img src="./images/intro02.png" />
                <img src="./images/intro03.png" />
              </div>
            </div>
            <div id="two" class="tab-pane">
              <p>规格与包装</p>
            </div>
            <div id="three" class="tab-pane">
              <p>售后保障</p>
            </div>
            <div id="four" class="tab-pane">
              <p>商品评价</p>
            </div>
            <div id="five" class="tab-pane">
              <p>手机社区</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 猜你喜欢 -->
    <div class="like">
      <h4 class="kt">猜你喜欢</h4>
      <ul class="like-list">
        <li class="likeItem">
          <div class="p-img">
            <img src="./images/itemlike01.png" />
          </div>
          <div class="attr">
            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
          </div>
          <div class="price">
            <em>¥</em>
            <i>3699.00</i>
          </div>
          <div class="commit">已有6人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="./images/itemlike02.png" />
          </div>
          <div class="attr">Apple苹果iPhone 6s/6s Plus 16G 64G 128G</div>
          <div class="price">
            <em>¥</em>
            <i>4388.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="./images/itemlike03.png" />
          </div>
          <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="./images/itemlike04.png" />
          </div>
          <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="./images/itemlike05.png" />
          </div>
          <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="./images/itemlike06.png" />
          </div>
          <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Zoom from "./Zoom";
import ImageList from "./ImageList";
import { mapGetters } from "vuex";
export default {
  name: "Detail",
  components: { Zoom, ImageList },
  mounted() {
    // this.$store.dispatch("getGoodsInfo",this.$route.params.skuId)
    this.$store.dispatch("getGoodInfo", this.$route.params.skuId);
  },
  data() {
    return {
      skuNum: 1,
    };
  },
  computed: {
    ...mapGetters(["categoryView", "skuInfo", "spuSaleAttrList"]),
    skuImageList() {
      return this.skuInfo.skuImageList || [];
    },
  },
  methods: {
    changeActive(s2, s) {
      // console.log(s2,s)
      s.spuSaleAttrValueList.forEach((item) => {
        item.isChecked = 0;
      });
      s2.isChecked = 1;
    },
    changeSkuNum(event) {
      const result = event.target.value * 1;
      // console.log(result)
      if (isNaN(result) || result < 1) {
        console.log("非法输入");
        this.skuNum = 1;
      } else {
        // console.log(parseInt(result))
        this.skuNum = parseInt(result);
      }
    },
    async addShopCart() {
      try {
        await this.$store.dispatch("addOrUpdateShopCart", {
          skuID: this.$route.params.skuId,
          skuNum: this.skuNum,
        });
        //路由跳转
        sessionStorage.setItem("SKUINFO", JSON.stringify(this.skuInfo));
        this.$router.push({
          path: "/addcartsuccess",
          query: { skuNum: this.skuNum },
        });
      } catch (error) {
        alert(error.message);
      }
    },
    
  },
};
</script>

<style lang="less">
.outer {
  .con {
    width: 1200px;
    margin: 15px auto 0;
    .conPoin {
      padding: 9px 15px 9px 0;
      & > a + a:before {
        content: "/\00a0";
        padding: 0 5px;
        color: #ccc;
      }
    }
    .mainCon {
      overflow: hidden;
      margin: 5px 0 15px;
      .previewWrap {
        float: left;
        width: 400px;
        position: relative;
        .preview {
          width: 400px;
          height: 400px;
          border: 1px solid #dfdfdf;
          .jqzoom {
            cursor: pointer;
            width: 400px;
            height: 400px;
            position: relative;
            img {
              width: 100%;
            }
            .mask {
              width: 200px;
              height: 200px;
              background: rgba(255, 255, 255, 0.5);
              position: absolute;
              left: 0;
              top: 0;
              border: 1px solid #ddd;
            }
          }
          .maxbox {
            width: 400px;
            height: 400px;
            position: absolute;
            left: 420px;
            top: 0px;
            overflow: hidden;
            z-index: 20;
            border: 1px solid #ddd;
            img {
              width: 800px;
              height: 800px;
              display: block;
            }
          }
        }
        .specScroll {
          margin-top: 5px;
          width: 400px;
          overflow: hidden;
          .prev,
          .next {
            text-align: center;
            width: 10px;
            height: 54px;
            line-height: 54px;
            border: 1px solid #ccc;
            background: #ebebeb;
            cursor: pointer;
          }
          .prev {
            float: left;
            margin-right: 4px;
          }
          .next {
            float: right;
          }
          .items {
            float: left;
            position: relative;
            width: 372px;
            height: 56px;
            overflow: hidden;
            .itemsCon {
              position: absolute;
              width: 9999px;
              height: 56px;
              left: 0;
              img {
                float: left;
                text-align: center;
                border: 1px solid #ccc;
                padding: 2px;
                width: 50px;
                height: 50px;
                margin-right: 20px;
              }
            }
          }
        }
      }
      .InfoWrap {
        width: 700px;
        float: right;
        .InfoName {
          font-size: 14px;
          line-height: 21px;
          margin-top: 15px;
        }
        .news {
          color: #e12228;
          margin-top: 15px;
        }
        .priceArea {
          background: #fee9eb;
          padding: 7px;
          margin: 13px 0;
          .priceArea1 {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;
            .title {
              float: left;
              margin-right: 15px;
            }
            .price {
              float: left;
              color: #c81623;
              i {
                font-size: 16px;
              }
              em {
                font-size: 24px;
                font-weight: 700;
              }
              span {
                font-size: 12px;
              }
            }
            .remark {
              float: right;
            }
          }
          .priceArea2 {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;
            .title {
              margin-right: 15px;
              float: left;
            }
            .fixWidth {
              width: 520px;
              float: left;
              .red-bg {
                background: #c81623;
                color: #fff;
                padding: 3px;
              }
              .t-gray {
                color: #999;
              }
            }
          }
        }
        .support {
          border-bottom: 1px solid #ededed;
          padding-bottom: 5px;
          .supportArea {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;
            .title {
              margin-right: 15px;
              float: left;
            }
            .fixWidth {
              width: 520px;
              float: left;
              color: #999;
            }
          }
        }
        .choose {
          .chooseArea {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;
            .choosed {
              mark {
                height: 30px;
                display: inline-block;
                line-height: 30px;
                background-color: snow;
                border: 1px solid #ddd;
                padding: 0 20px;
                margin-right: 20px;
                a {
                  font-size: 12px;
                  color: red;
                  margin-left: 20px;
                  cursor: pointer;
                }
              }
            }
            dl {
              overflow: hidden;
              margin: 13px 0;
              dt {
                margin-right: 15px;
                float: left;
              }
              dd {
                float: left;
                margin-right: 5px;
                color: #666;
                line-height: 24px;
                padding: 2px 14px;
                border-top: 1px solid #eee;
                border-right: 1px solid #bbb;
                border-bottom: 1px solid #bbb;
                border-left: 1px solid #eee;
                &.active {
                  color: red;
                  border: 1px solid red;
                }
              }
            }
          }
          .cartWrap {
            .controls {
              width: 48px;
              position: relative;
              float: left;
              margin-right: 15px;
              .itxt {
                width: 38px;
                height: 37px;
                border: 1px solid #ddd;
                color: #555;
                float: left;
                border-right: 0;
                text-align: center;
              }
              .plus,
              .mins {
                width: 15px;
                text-align: center;
                height: 17px;
                line-height: 17px;
                background: #f1f1f1;
                color: #666;
                position: absolute;
                right: -8px;
                border: 1px solid #ccc;
              }
              .mins {
                right: -8px;
                top: 19px;
                border-top: 0;
              }
              .plus {
                right: -8px;
              }
            }
            .add {
              float: left;
              a {
                background-color: #e1251b;
                padding: 0 25px;
                font-size: 16px;
                color: #fff;
                height: 36px;
                line-height: 36px;
                display: block;
              }
            }
          }
        }
      }
    }
  }
  .productDetail {
    width: 1200px;
    margin: 30px auto 0;
    overflow: hidden;
    .aside {
      width: 210px;
      float: left;
      border: 1px solid #ccc;
      .tabWraped {
        height: 40px;
        h4 {
          border-top: 3px solid #fff;
          float: left;
          line-height: 37px;
          width: 105px;
          text-align: center;
          border-bottom: 1px solid #ccc;
          &.active {
            border-top: 3px solid #e1251b;
            border-bottom: 0;
            font-weight: normal;
          }
        }
      }
      .tabContent {
        padding: 10px;
        .tab-pane {
          display: none;
          &.active {
            display: block;
          }
          &:nth-child(1) {
            .partList {
              overflow: hidden;
              li {
                width: 50%;
                float: left;
                border-bottom: 1px dashed #ededed;
                line-height: 28px;
              }
            }
            .goodsList {
              & > li {
                margin: 5px 0 15px;
                border-bottom: 1px solid #ededed;
                padding-bottom: 5px;
                .list-wrap {
                  .p-img {
                    text-align: center;
                    img {
                      width: 152px;
                    }
                  }
                  .price {
                    font-size: 16px;
                    color: #c81623;
                  }
                  .operate {
                    text-align: center;
                    margin: 5px 0;
                    a {
                      background-color: transparent;
                      border: 1px solid #8c8c8c;
                      color: #8c8c8c;
                      display: inline-block;
                      padding: 2px 14px;
                      line-height: 18px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .detail {
      width: 980px;
      float: right;
      .fitting {
        border: 1px solid #ddd;
        margin-bottom: 15px;
        .kt {
          border-bottom: 1px solid #ddd;
          background: #f1f1f1;
          color: #333;
          padding: 5px 0 5px 15px;
        }
        .good-suits {
          height: 170px;
          padding-top: 10px;
          .master {
            width: 127px;
            height: 165px;
            text-align: center;
            position: relative;
            float: left;
            img {
              width: 87px;
            }
            p {
              color: #c81623;
              font-size: 16px;
              font-weight: 700;
            }
            i {
              position: absolute;
              top: 48px;
              right: -25px;
              font-size: 16px;
            }
          }
          .suits {
            width: 668px;
            height: 165px;
            float: left;
            .suitsItem {
              float: left;
              width: 127px;
              padding: 0 20px;
              text-align: center;
              img {
                width: 120px;
                height: 130px;
              }
              p {
                font-size: 12px;
              }
              label {
                display: block;
                position: relative;
                input {
                  vertical-align: middle;
                }
                span {
                  vertical-align: middle;
                }
              }
            }
          }
          .result {
            border-left: 1px solid #ddd;
            width: 153px;
            height: 165px;
            padding-left: 20px;
            float: left;
            .num {
              font-size: 14px;
              margin-bottom: 10px;
              margin-top: 10px;
            }
            .price-tit {
              font-weight: bold;
              margin-bottom: 10px;
            }
            .price {
              color: #b1191a;
              font-size: 16px;
              margin-bottom: 10px;
            }
            .addshopcar {
              background-color: #e1251b;
              border: 1px solid #e1251b;
              padding: 10px 25px;
              font-size: 16px;
              color: #fff;
              display: inline-block;
              box-sizing: border-box;
            }
          }
        }
      }
      .intro {
        .tab-wraped {
          background: #ededed;
          // border: 1px solid #ddd;
          overflow: hidden;
          li {
            float: left;
            & + li > a {
              border-left: 1px solid #ddd;
            }
            &.active {
              a {
                // border: 0;
                background: #e1251b;
                color: #fff;
              }
            }
            a {
              display: block;
              height: 40px;
              line-height: 40px;
              padding: 0 11px;
              text-align: center;
              color: #666;
              background: #fcfcfc;
              border-top: 1px solid #ddd;
              border-bottom: 1px solid #ddd;
            }
          }
        }
        .tab-content {
          .tab-pane {
            display: none;
            &.active {
              display: block;
            }
            &:nth-child(1) {
              .goods-intro {
                padding-left: 10px;
                li {
                  margin: 10px 0;
                }
              }
              .intro-detail {
                img {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
  .like {
    width: 1198px;
    border: 1px solid #ddd;
    margin: 15px auto;
    .kt {
      border-bottom: 1px solid #ddd;
      background: #f1f1f1;
      color: #333;
      margin: 0;
      padding: 5px 10px;
    }
    .like-list {
      padding: 15px 11px;
      overflow: hidden;
      .likeItem {
        width: 196px;
        float: left;
        .p-img {
          text-align: center;
          img {
            width: 167px;
            height: 123px;
          }
        }
        .attr {
          padding: 0 15px;
        }
        .price {
          padding: 0 15px;
          font-size: 16px;
          color: #c81623;
          margin-bottom: 20px;
        }
        .commit {
          padding: 0 15px;
        }
      }
    }
  }
  .toolbar {
    position: fixed;
    z-index: 999;
    width: 300px;
    height: 100%;
    background-color: #7a6e6e;
    transition: right 0.3s ease-in-out 0s;
    &.toolbar-out {
      top: 0px;
      right: 0px;
    }
    &.toolbar-wrap {
      top: 0px;
      right: -294px;
    }
    .content {
      position: relative;
      left: 6px;
      width: 294px;
      background-color: bisque;
      height: 100%;
      z-index: 99;
    }
    .but {
      position: relative;
      width: 35px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      margin-bottom: 1px;
      cursor: pointer;
      background-color: #7a6e6e;
      border-radius: 3px 0 0 3px;
      position: absolute;
      top: 0;
      /*right: -6px;*/
      left: -29px;
      &.list {
        background-image: url(./images/list.png);
        background-repeat: no-repeat;
        background-size: cover;
      }
      &.pull-wrap {
        background-image: url(./images/cross.png);
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .toolist {
      position: absolute;
      top: 50%;
      left: -29px;
      width: 35px;
      margin-top: -80px;
      /*background-color: cadetblue;*/
      .pull {
        position: relative;
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        margin-bottom: 1px;
        cursor: pointer;
        background-color: #7a6e6e;
        border-radius: 3px 0 0 3px;
        z-index: 66;
        .vip {
          background-image: url(./images/toolbars.png);
          background-position: -88px -175px;
        }
        .cart {
          background-image: url(./images/toolbars.png);
          background-position: -50px 0;
        }
        .follow {
          background-image: url(./images/toolbars.png);
          background-position: -50px -50px;
        }
        .history {
          background-image: url(./images/toolbars.png);
          background-position: -50px -100px;
        }
        .message {
          background-image: url(./images/toolbars.png);
          background-position: -190px -150px;
        }
        .jimi {
          background-image: url(./images/toolbars.png);
          background-position: -50px -150px;
        }
        .top {
          background-image: url(./images/toolbars.png);
          background-position: -50px -250px;
        }
        .tab-text {
          width: 62px;
          height: 35px;
          line-height: 35px;
          color: #fff;
          text-align: center;
          font-family: 微软雅黑;
          position: absolute;
          /*position: relative;*/
          z-index: 1;
          left: 35px;
          top: 0;
          background-color: #7a6e6e;
          border-radius: 3px 0 0 3px;
          font-style: normal;
          -webkit-transition: left 0.3s ease-in-out 0.1s;
          transition: left 0.3s ease-in-out 0.1s;
        }
        .tab-ico {
          display: inline-block;
          position: relative;
          /*background-image: url(img/toolbars.png);*/
          background-color: #7a6e6e;
          border-radius: 3px 0 0 3px;
          z-index: 2;
          width: 35px;
          height: 35px;
        }
      }
    }
    & > .pull {
      position: relative;
      width: 35px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      margin-bottom: 1px;
      cursor: pointer;
      background-color: #7a6e6e;
      border-radius: 3px 0 0 3px;
      z-index: 66;
      .tab-ico {
        display: inline-block;
        position: relative;
        /*background-image: url(img/toolbars.png);*/
        background-color: #7a6e6e;
        border-radius: 3px 0 0 3px;
        z-index: 2;
        width: 35px;
        height: 35px;
      }
      .top {
        background-image: url(./images/toolbars.png);
        background-position: -50px -250px;
      }
      .tab-text {
        width: 62px;
        height: 35px;
        line-height: 35px;
        color: #fff;
        text-align: center;
        font-family: 微软雅黑;
        position: absolute;
        /*position: relative;*/
        z-index: 1;
        left: 35px;
        top: 0;
        background-color: #7a6e6e;
        border-radius: 3px 0 0 3px;
        font-style: normal;
        -webkit-transition: left 0.3s ease-in-out 0.1s;
        transition: left 0.3s ease-in-out 0.1s;
      }
    }
    & > .back {
      position: absolute;
      bottom: 0;
      /*right: -6px;*/
      left: -29px;
      display: inline-block;
      background-image: url(./images/toolbars.png);
    }
  }
}
</style>
