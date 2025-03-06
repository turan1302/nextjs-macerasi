import React from 'react'

const Report = (props) => {

    const {aylik,haftalik,bekleyen_gorev,onaylanan_istek} = props;

    return (
        <div className="row">



            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div
                                    className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Kazanç (Aylık)
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">₺{aylik}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div
                                    className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Kazanç (Haftalık)
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">₺{haftalik}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-turkish-lira fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div
                                    className="text-xs font-weight-bold text-info text-uppercase mb-1">Bekleyen Görevler
                                </div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{bekleyen_gorev}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div
                                    className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Onaylanan İstekler
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{onaylanan_istek}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report
