'use client';

import React, {
	createContext,
	useReducer,
	useEffect,
	useCallback,
} from 'react';
import axios from 'axios';

// --- 필요한 상수들 (코드, 경로 등)
const APP_CONFIG = (window as any).$APP_CONFIG || {}; // 혹은 import ...
const CODES_CONFIG = (window as any).$CODES_CONFIG || {}; // 혹은 import ...

// 광고/네비게이션용 디스플레이 아이디 매핑
const DISPLAY_ID: Record<string, string[]> = {
	greenjuice: ['GJ', 'New', 'Event', 'Guide'],
};

// --- 초기 상태
const initialState = {
	gnbData: null,
	mallName: 'pulmuone',
	// 기타 필요한 state ...
};

// --- 리듀서
function commonReducer(state, action) {
	switch (action.type) {
		case 'SET_GNB_DATA':
			return { ...state, gnbData: action.payload };
		case 'SET_MALL_NAME':
			return { ...state, mallName: action.payload };
		// ... add more
		default:
			return state;
	}
}

// --- Context 생성
export const CommonContext = createContext();

// --- Provider
export function CommonProvider({ children }) {
	const [state, dispatch] = useReducer(commonReducer, initialState);

	// GNB 데이터 fetch (Vuex의 actions → 여기선 useEffect+axios)
	const fetchGnbData = useCallback(async (mallName) => {
		// 예시: API 경로 등 실서비스에 맞게 변경
		let inventoryCode = 'MAIN_GNB_TITLE';
		if (mallName === 'orga') inventoryCode = 'OMAIN_GNB_TITLE';
		else if (mallName === 'greenjuice') inventoryCode = 'GMAIN_GNB_TITLE';

		try {
			const res = await axios.get(`/api/gnb?inventoryCode=${inventoryCode}`);
			// 실제 응답 구조에 맞게 가공 필요!
			if (res.data && res.data.data) {
				const gnbArr =
					res.data.data.find((v) => v.inventoryCode === inventoryCode)
						?.level1 || [];
				dispatch({ type: 'SET_GNB_DATA', payload: gnbArr });
			}
		} catch (e) {
			console.error(e);
			dispatch({ type: 'SET_GNB_DATA', payload: [] });
		}
	}, []);

	// 초기 GNB 데이터 로드
	useEffect(() => {
		fetchGnbData(state.mallName);
	}, [fetchGnbData, state.mallName]);

	// 링크 가공 함수 (광고 파라미터 등)
	const goToUrl = (url, index) => {
		const mall = state.mallName;
		const mallGnb = DISPLAY_ID[mall];
		if (mallGnb) {
			// setAdLink는 별도 구현 필요
			return setAdLink(url, `${mall}_PC_Main`, mallGnb[index]);
		} else {
			return url;
		}
	};

	// Context로 제공할 값
	const value = {
		...state,
		goToUrl,
		// 기타 메소드 및 state
	};

	return (
		<CommonContext.Provider value={value}>{children}</CommonContext.Provider>
	);
}

// 광고 링크 가공 함수 예시 (Vue에서 쓰던 setAdLink와 유사하게 만들어야 함)
function setAdLink(url, mallKey, adKey) {
	// 광고 파라미터 추가 방식은 실제 구현에 따라 변경
	const delimiter = url.includes('?') ? '&' : '?';
	return `${url}${delimiter}adMallKey=${encodeURIComponent(
		mallKey
	)}&adKey=${encodeURIComponent(adKey)}`;
}
