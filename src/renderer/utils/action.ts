import modalStore from "@/stores/modal.store";

/**
 * 弹出是否退出应用还是最小化应用
 * @param visible
 */
export const changeCloseWinTypeModal = (visible:boolean) => {
  modalStore.updateState({closeWinTypeVisible:visible})
}