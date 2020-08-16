export const view = (state = 'ALL', action) => {
  switch (action.view) {
    case 'ALL':
      return 'ALL';
		case 'ACTIVE':
			return 'ACTIVE';
		case 'COMPLETED':
			return 'COMPLETED';
		default:
      return state;
  }
}