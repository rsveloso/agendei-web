import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import { doctors, doctors_services, users } from "../../constants/data.js"

function AppointmentAdd() {

    const { id_appointment } = useParams();

    return <>
        <Navbar />

        <div className="container-fluid mt-page">
            <div className="row col-lg-4 offset-lg-4">
                <div className="col-12 mt-2">
                    <h2>{ id_appointment > 0 ? "Editar" : "Novo" } Agendamento</h2>
                </div>

                {/* Inpur de auto complete paciente */}

                <div className="col-12 mt-4">
                    <label htmlFor="user" className="form-label">Paciente</label>
                    <div className="form-control mb-2">
                        <select name="user" id="user" className="col-12">
                            <option value="0">Selecione o paciente</option>
                            {
                                users.map((user) => {
                                    return <option key={user.id_user}
                                        value={user.id_user}>{user.name}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <label htmlFor="doctor" className="form-label">Médico</label>
                    <div className="form-control mb-2">
                        <select name="doctor" id="doctor" className="col-12">
                            <option value="0">Selecione um médico</option>
                            {
                                doctors.map((doc) => {
                                    return <option key={doc.id_doctor}
                                        value={doc.id_doctor}>{doc.name}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="col-12 mt-3">
                    <label htmlFor="service" className="form-label">Serviço</label>
                    <div className="form-control mb-2">
                        <select name="service" id="service" className="col-12">
                            <option value="0">Selecione o seviço</option>
                            {
                                doctors_services.map((serv) => {
                                    return <option key={serv.id_service}
                                        value={serv.id_service}>{serv.description}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="col-6 mt-3">
                    <label htmlFor="bookingDate" className="form-label">Data</label>
                    <input type="date" name="bookingDate" id="bookingDate" className="form-control" />
                </div>

                <div className="col-6 mt-3">
                    <label htmlFor="bookingHour" className="form-label">Horário</label>
                    <div className="form-control mb-2">
                        <select name="bookingHour" id="bookingHour" className="col-12">
                            <option value="0">Selecione o horário</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                        </select>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <div className="d-flex justify-content-end">
                        <Link to="/appointments" className="btn btn-outline-primary me-3">
                            Cancelar
                        </Link>
                        <button className="btn btn-primary">Salvar Dados</button>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default AppointmentAdd;