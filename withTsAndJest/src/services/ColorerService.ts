import { parse } from "../global/utils/NumberFormatter";
import { HttpClient } from "./httpClient";

export default class ColorerService {

    static async getVendasDeptosTotal(dataInicial: string, dataFinal: string, diretoriaId?: number) {
        const res = await HttpClient.get(`https://flash.riachuelo.com.br/vendas/deptos/total`, {
            params: {
                'loja': '',
                'divisao': '',
                'regiao': '',
                'distrito': '',
                'cidade': '',
                'data_inauguracao_inicio': '',
                'data_inauguracao_final': '',
                'data_inicial': dataInicial,
                'data_final': dataFinal,
                'agrupar': '7',
                'gerencia': '',
                'departamentos': '',
                'diretoria': `${diretoriaId}`,
                'sala': '',
                'urlApi': '',
                // 'data_breadcrumb[link_pagina]': 'https://flash.riachuelo.com.br/vendas/deptos/total/20211119/20211119',
                // 'data_breadcrumb[url_anterior]': 'https://flash.riachuelo.com.br/vendas/deptos/total/20211119/20211119',
                'data_breadcrumb[id_tab_browser]': '43125840'
            }
        })

        let gerencias = res.data.GERENCIAS.filter(item => item.NOME !== 'NÃO DEFINIDO').map(item => {
            return {
                ...item,
                atg: parse(item.ATG_, { srcFormat: 'pt_BR' }),
                crescimento: parse(item.CRESCIMENTO, { srcFormat: 'pt_BR' }),
                crescimentoOrcado: parse(item.CRESC_ORCADO_, { srcFormat: 'pt_BR' }),
                cupomMedio: parse(item.CUP_MEDIO_, { srcFormat: 'en_US' }),
                desvio: parse(item.DESVIO_, { srcFormat: 'pt_BR' }),
                numCupons: parse(item.N_CUPONS, { srcFormat: 'pt_BR' }),
                orcado: parse(item.ORCADO, { srcFormat: 'en_US' }),
                percentualVendaCartao: parse(item.PART_MID_ || item.PART_AME_, { srcFormat: 'pt_BR' }),
                percentualVendaOnline: parse(item.PART_VENDA_ONLINE_, { srcFormat: 'pt_BR' }),
                previsao: parse(item.PREVISAO_, { srcFormat: 'pt_BR' }),
                previsaoPercCia: parse(item.PREVISAO_PERC_, { srcFormat: 'pt_BR' }),
                vendaCartao: parse(item.VENDA_MID || item.VENDA_AME, { srcFormat: 'pt_BR' }),
                vendaOnline: parse(item.VENDA_REAL_ONLINE_, { srcFormat: 'en_US' }),
                vendaTot: parse(item.VENDA_TOT, { srcFormat: 'en_US' })
            }
        })

        return {
            ...res,
            data: { ...res.data, GERENCIAS: gerencias }
        }
    }

    static sort(res: any, orderBy) {
        let gerencias = res.data.GERENCIAS.slice()
        const sortAsc = (itemA, itemB) => {
            return itemA[orderBy.property] - itemB[orderBy.property]
        }
        const sortDesc = (itemA, itemB) => {
            return itemB[orderBy.property] - itemA[orderBy.property]
        }
        const sortFunction = orderBy.order === 'desc' ? sortDesc : sortAsc
        gerencias = gerencias.sort(sortFunction)
        return {
            ...res,
            data: { ...res.data, GERENCIAS: gerencias }
        }
    }

}


